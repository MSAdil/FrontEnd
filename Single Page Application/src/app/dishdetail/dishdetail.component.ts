import { Component, OnInit } from '@angular/core'; // import a new module here "Input"
import { Dish } from '../shared/dish';
// this input module then will be used to declare a decorator 

// to enable the routing between the menu comp and dish detail comp we will import the below
import { Params, ActivatedRoute } from '@angular/router'; // this gives access to router parameters
// activated route service provides the access to the routes  
import {Location}  from '@angular/common'; // location enables us to track the location of the page in the history of the browser
// hence able to go back

// dish service is also imported here as we have to explicitly fetch the info directly from there 
import {DishService} from '../services/dish.service';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // pass the dishService, location in the constructor to make it avaibles 
  constructor(private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  // the below part is deleted because the specific dish will come uing angular router
  //@Input()

  dish: Dish;

  ngOnInit() {
    let id = this.route.snapshot.params['id']; // this fetches the id from the route parameter
    this.dish = this.dishService.getDish(id);
  }

  // go back method added to go back to menu from dish detail
  goBack(): void{
    this.location.back(); 
  }
}
