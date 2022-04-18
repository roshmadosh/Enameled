import { Component, OnInit } from '@angular/core';
import { _CATEGORIES } from '../../enums/categories.enum';
import { Recipe } from '../../models/recipe.model';
import { RecipesService } from '../../services/recipes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories: Array<{ id: string, label: string }> = [...Object.values(_CATEGORIES)];
  results: Array<Recipe> = [];
  constructor(private recipeService: RecipesService,
    ) { }

  ngOnInit(): void {
  }

  doIfChecked(event: Event, category: string) {
    const checked = (<HTMLInputElement>event.target).checked;
    const recipesOfCategory = this.recipeService.getRecipesByCategory(category);

    if (checked) {
      // add recipes of checked category to results
      const updated = this.results.concat(recipesOfCategory);
      const sorted = this.recipeService.sortRecipesBy(updated, 'dateCreated');
      console.log(sorted);
      this.results = sorted;
    } else {
      // filter out recipes of the checked category
      const filtered = this.results.filter(recipe => recipe.category !== category);
      this.results = this.recipeService.sortRecipesBy(filtered, 'dateCreated');
    }
  }

}
