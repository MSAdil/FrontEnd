import { Comment } from './comment'

export class Dish {
    id: string; // defining properties of the class Dish
    name: string;
    image: string;
    category : string;
    featured: boolean;
    label : string;
    price : string;
    description : string;
    comments: Comment[];
}
// this class can be imported to any of the typescript file of the application