/**
 * Created by NetSri on 30/06/2016.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';

declare  var $:any;
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ APP_PROVIDERS ]
})
export class AppComponent {
    
    loggedIn:boolean = true;
    
    menuToggle(event: any):void{
        event.preventDefault();
        $("#wrapper").toggleClass("toggled");
        console.log('Clicked');
    }
}