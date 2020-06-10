import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importing route constants defined ini route.ts file 
import { routes } from './routes'; // then pass this to the routerModule as parameter

// importing from angular's router module 
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // routes are passed as parameter for forRoot() 
  ],
  exports:[
    RouterModule
  ]//this will able us to use a directive router-outlet which can be used as view inside the app component template file
})
export class AppRoutingModule { }

// we will create another file called routes.ts where we will define all our routes
