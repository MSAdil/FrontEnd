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
  // here we will introduce new methods 
  // extracting specific dish with ID 
  getDish(id: string): Dish {
    return DISHES.filter((dish) => (dish.id === id))[0];   // here we will use JS filtering of an array
  }

  getFeaturedDish(): Dish {

    return DISHES.filter((dish) => dish.featured)[0];
  }
}

// dish service is to be inject into app module