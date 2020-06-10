import { Injectable } from '@angular/core'; // injectable allows us to define the injectable decorator 
// by this we can make this object injectable

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes'; 

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // here we will define a method to return the dishes constant 
  getDishes(): Dish[] {
    return DISHES;
    
  }
}

// dish service is to be inject into app module