import { Injectable } from '@angular/core';
import { Promotion} from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  // here we will define some methods quite similar to the dish services but targetting the promoted dishes 
  getPromotions() : Promotion[] {
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion {
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeaturedPromotion(): Promotion {
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }
}


// from here we go to homecomponent to share the featured dish and featured promotions
