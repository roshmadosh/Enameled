import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    localStorage.setItem('categories', JSON.stringify(this.categoriesService.get()));
    console.log('Dashboard init')
  }

}
