import { Component } from '@angular/core';
import { FilterService } from '../../../services/filter-service';
import { MatSelectionListChange, MatSelectionList, MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.html',
  standalone: false,
})
export class CategoryFilterComponent {
  categories = ['Electronics', 'Sportswear', 'Accessories'];

  constructor(private filterService: FilterService) {}

  onSelect(event: MatSelectionListChange) {
    const selected = event.options[0].selected ? event.options[0].value : null;
    this.filterService.setCategory(selected);
  }
}
