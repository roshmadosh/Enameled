import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { _CATEGORIES } from '../enums/categories.enum';
import { __importDefault } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  _default = [
    new Recipe('Curry', 
      'someAuthor', 
      ['make roux', 'slice veggies', 'throw all in pot'],
      _CATEGORIES.INDIAN['label'],
      ['../assets/curry1.jpg'],
      new Date('2019-05-27')
    ),
    new Recipe('Oyakodon withed grilled bell peppers and fried rice',
      'JunsKitchen',
      ['grill chicken', 'lower heat', 'pour eggs', 'eat'],
      _CATEGORIES.JAPANESE['label'],
      [],
      new Date('2022-03-27')
    ),
    new Recipe('Tonkatsu',
      'JunsKitchen',
      ['prepare egg batter, potato starch, panko', 'heat veggie oil to 350 degrees', 'deep fry tonkatsu', 'stand on paper towels and rest for 5 mins.'],
      _CATEGORIES.JAPANESE['label'],
      ['../assets/tonkatsu1.jpg', ''],
      new Date('2021-05-27')
    ),
    new Recipe('Ramen',
      'ChefLabo',
      ['heat water', 'cook noodles'],
      _CATEGORIES.JAPANESE['label'],
      ['../assets/ramen1.jpg', ''],
      new Date('2022-01-27')
    ),
  ]

  constructor() { }

  getAllRecipes(): Array<Recipe> {
    return this._default;
  }

  getRecipesByCategory(catLabel: string): Array<Recipe> {
    return this._default.filter(recipe => recipe.category === catLabel);
  }

  sortRecipesBy(recipes: Recipe[], param: string) {
    switch(param) {
      case 'dateCreated':
        return recipes.sort((a,b) => { 
          if (a['dateCreated'] > b['dateCreated'])
            return -1;
          else if (a['dateCreated'] === b['dateCreated'])
            return 0;
          else 
            return 1; 
        });
      default:
        return [];   
    }
  }
    
}
