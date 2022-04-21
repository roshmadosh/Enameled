import { Recipe } from "../models/recipe.model";
import { _CATEGORIES } from "./categories.enum";

export const _DEFAULTS = {
  RECIPE: new Recipe('', '', [], _CATEGORIES.JAPANESE['label'], [], new Date(0)),
}