import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  categories: Category[] = [];
  selectedCategories: Category[] = [];
  constructor(private categoriesService: CategoriesService,
              private router: Router,
              private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const storedCategories = JSON.parse(localStorage.getItem('categories') || '[]');
    if (storedCategories) {
      this.categories = storedCategories.map((cat: { [x: string]: string; }) => new Category(cat['id'], cat['label']))
    };
  }

  doIfChecked(event: Event, category: Category) {
    const checked = (<HTMLInputElement>event.target).checked;
    if (checked) {
      this.selectedCategories.push(category)
    } else {
      this.selectedCategories.splice(this.selectedCategories.findIndex(cat => cat['id'] === category['id']),1);
    }
  }

}
