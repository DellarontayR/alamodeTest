import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import { ILooseObject } from '../../interfaces/looseObject';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { MookieEmitService } from '../../services/mookie-emit.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MookieModalComponent } from '../mookie-modal/mookie-modal.component';


@Component({
  selector: 'app-mookie-menu',
  templateUrl: './mookie-menu.component.html',
  styleUrls: ['./mookie-menu.component.scss']
})
export class MookieMenuComponent implements OnInit {

  constructor(private productService: ProductService, private shared: SharedService, private inventoryService: InventoryService, private cartService: CartService, private userService: UserService, private authService: AuthService, private mookieEmit: MookieEmitService, private modalService: NgbModal) { }

  products;

  itemNameMap: any;
  @Output() valueChange = new EventEmitter();

  // Authentication I

  ngOnInit() {
    this.itemNameMap = new Map();
    this.itemNameMap.set("og mookie", "og mookie");
    this.itemNameMap.set("og mookie's confetti party", "funfetti");
    this.itemNameMap.set("cookies n creme", "oreo");
    this.itemNameMap.set("aunty vicky's red velvet", "Red velvet");
    this.itemNameMap.set("dark chocolate mocha", "Dark chocolate");

    this.getProductsFromServer();

  }

  handleProduct = function (products) {
    console.log(products);
  };

  // Will have to put add to product

  // 
  getProductsFromServer = function () {
    this.productService.getCatalogProducts().subscribe(data => {
      if (data.success) {
        this.shared.updateSharedVar('products', data.catalogProducts);
        this.products = data.catalogProducts;
        this.inventoryService.getInventory().subscribe(inventoryData => {
          if (inventoryData.success) {
            let inventory = inventoryData.inventory;
            let totalMap = new Map();
            inventory.totals.forEach(total => {
              totalMap.set(total.itemName, total.itemQtyTotal);
            });
            this.products.forEach((product) => {
              if (this.itemNameMap.has(product.title)) {
                if (totalMap.get(this.itemNameMap.get(product.title))) {
                  product.inStock = "In Stock";
                }
                else {
                  product.inStock = "Not in Stock";
                }
              }
            })
          }
        });

      }
    });
  };

  // Updates the cart after adding an item to the cart
  updateCart = function (getCartData, callback) {
    this.cartService.getCart(getCartData).subscribe(data => {
      console.log(data);
      if (data.success) {
        let itemCount = 0;
        data.cart.products.forEach(function (cartProduct) {
          itemCount++;
        });
        var cartData = data.cart;
        cartData.itemCount = itemCount;
        // Find Way to set scope variables
        this.shared.updateSharedVar("cartItemCount", itemCount);
        this.shared.updateSharedVar("cart", cartData);
        return callback(data);
      }
      else {
        // Err

      }
    });
  };

  // Add Product to user cart
  // TODO
  // Add message for non active user's to active their accounts

  addToCart = function (product, catalogProduct) {
    this.authService.getOrderingSchedule().subscribe(data => {
      console.log(data);
      if (data.success) {
        let schedule = data.schedule;
        let currentTime = new Date();
        let hours = currentTime.getHours();
        if (hours > schedule.startHour && hours < schedule.endHour) {
          this.authService.getUser().subscribe(tokenData => {
            if (tokenData.email) {
              this.shared.updateSharedVar('user', { userEmail: tokenData.email, username: tokenData.usernmae });
              this.userService.getUser().subscribe(data => {
                if (data.success) {
                  let cartData: ILooseObject = {};
                  cartData.qty = 1;
                  cartData.description = product.description;
                  cartData.price = product.price;
                  cartData.title = product.title;
                  cartData.imagePath = product.imagePath;
                  cartData.userId = data.user._id;
                  cartData.product = catalogProduct;
                  if (data.user.active) {
                    this.cartService.addItemToCart(cartData).subscribe(resData => {
                      console.log(resData);
                      if (resData.success) {
                        this.shared.updateSharedVar('cartItemCount', resData.cart.products.length);
                        this.mookieEmit.emitChange();
                      }
                      else {
                        const modalRef = this.modalService.open(MookieModalComponent);
                        modalRef.componentInstance.modalTitle = "Your account might not be activated.";
                        modalRef.componentInstance.modalBody = "Please activate your activate your account before attempting to add to your cart. ";
                        // Show Error
                        // User might need to activate account

                      }
                    })
                  }

                }
              });
            }
            else {
              const modalRef = this.modalService.open(MookieModalComponent);
              modalRef.componentInstance.modalTitle = "It appears you aren't signed in.";
              modalRef.componentInstance.modalBody = "Please register and account your account or sign in before attempting to add to cart. ";
            }

          });
        }
        else {
          const modalRef = this.modalService.open(MookieModalComponent);
          modalRef.componentInstance.modalTitle = "Ordering is closed for now.";
          modalRef.componentInstance.modalBody = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm. ";

        }
      }
      else {
        const modalRef = this.modalService.open(MookieModalComponent);
        modalRef.componentInstance.modalTitle = "Ordering is closed for now.";
        modalRef.componentInstance.modalBody = "Mookie Dough hours will be from 8 am to 7pm Monday Through Sunday with delivery starting at 9pm. ";
      }
    });
  };
}
