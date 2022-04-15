import { Injectable } from "@angular/core";
import { Category } from "../models/category.model";

@Injectable()
export class CategoriesService {
  _defaultData = [
    new Category('1', 'Japanese'),
    new Category('2', 'Indian'),
    new Category('3', 'Korean'),
  ];

  get() {
    return this._defaultData;
  }

}