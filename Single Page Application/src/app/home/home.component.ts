import { Component, OnInit } from '@angular/core';

// import dish and promotion from the shared and service folders
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

import {Promotion} from '../shared/promotion';
import {PromotionService}  from '../services/promotion.service'; // after this the info has to be passed to the 
// constructor of HomeComponent


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  // services are injected to the constructor 
  constructor(private dishService: DishService, private promotionService: PromotionService) { }

  ngOnInit(): void {
    // using this method we will fetch the featured dish and  the promotion
    this.dish = this.dishService.getFeaturedDish();
    this.promotion = this.promotionService.getFeaturedPromotion();
  }

}
