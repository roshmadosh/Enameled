import { Component, Input, OnInit } from '@angular/core';
import { _DEFAULTS } from '../../enums/defaults.enum';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe = _DEFAULTS.RECIPE;
  constructor() { }

  ngOnInit(): void {
  }

}
