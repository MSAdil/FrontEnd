import { Routes } from '@angular/router';

// since the routing need to be done amongst the components, import all components here expcept the app
import { MenuComponent } from '../menu/menu.component';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';

// now we will define a const here of type routes 

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    // route defined to communicate between components 
    {path: 'dishdetail/:id', component: DishdetailComponent}, // angular supports passing route parameters , from here go to menu component html file and delete the part of the dishdetail comp
    //TODO include paths of other components
    {path: 'contact', component: ContactComponent},
    
    // default path 
    {path: '', redirectTo:'/home', pathMatch: 'full'}
]

// from here we will go to app-routing module and import these route constants there