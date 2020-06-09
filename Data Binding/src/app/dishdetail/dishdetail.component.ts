import { Component, OnInit, Input } from '@angular/core'; // import a new module here "Input"
import { Dish } from '../shared/dish';
// this input module then will be used to declare a decorator 



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  constructor() { }

  @Input()
  dish: Dish;

  ngOnInit(): void {
  }

}
