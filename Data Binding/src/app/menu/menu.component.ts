import { Component, OnInit } from '@angular/core';

// import the created Dish class here, so that we can use it as a type for a variable
import { Dish } from '../shared/dish'; // then go MenuComponent class and declare a variable of the type Dish

// cut the dishes from the class and declare a new constant here, LATER WE WILL REMOVE IT FROM HERE AND DECLARE IT AS A SERVICE

import { DISHES} from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // new variable dishes is declared here of the type Dish array
  dishes: Dish[] = DISHES;
  // here we introduce one more variable called selectedDish, which is the first dish in an array
  selectedDish: Dish;

  constructor() { }

  ngOnInit(): void {
  }

  // here we will define the onselect method which is the handler
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
