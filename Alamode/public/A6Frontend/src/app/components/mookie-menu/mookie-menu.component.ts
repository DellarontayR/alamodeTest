import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { SharedService } from '../../services/shared.service';
import { Observable } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';


@Component({
  selector: 'app-mookie-menu',
  templateUrl: './mookie-menu.component.html',
  styleUrls: ['./mookie-menu.component.scss']
})
export class MookieMenuComponent implements OnInit {

  constructor(private productService: ProductService, private shared: SharedService, private inventoryService: InventoryService) { }

  products;

  itemNameMap:any;

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
            this.products.forEach( (product)=> {
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

}
