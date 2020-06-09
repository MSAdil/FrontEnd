import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// importing the initially installed module 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';

// after importing here the above modules needs to be defined in the imports in the 
// NgModule decorator for the app module


// automatically updated when u create a component
import { MenuComponent } from './menu/menu.component';

// import the MatList module here 
import { MatListModule } from '@angular/material/list';
// now here we will import the mat-grid-list module
import { MatGridListModule } from '@angular/material/grid-list';
// here we will import card and the button module 
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { DishdetailComponent } from './dishdetail/dishdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent // components are added in declaration
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Modules added here
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
