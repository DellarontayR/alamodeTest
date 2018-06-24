import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ILooseObject } from '../../interfaces/looseObject';

@Component({
  selector: 'app-mookie-activate',
  templateUrl: './mookie-activate.component.html',
  styleUrls: ['./mookie-activate.component.scss']
})
export class MookieActivateComponent implements OnInit {

  messageBody: ILooseObject;
  activate$: Observable<any>;
  constructor(private userService: UserService, private actiavtedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.messageBody = {};
    this.activate$ = this.actiavtedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.userService.activateAccount(params.get('token'));
      }));

      this.activate$.subscribe(data=>{
        if(data.success){
          this.messageBody.message ="Account Successfully Activated";
          setTimeout(()=>{
            this.router.navigate(['/account']);
          },2000);
        }
        else{
          this.messageBody.message = "Account could not be activated. Activation link may have expired";
        }
      });
  }

}