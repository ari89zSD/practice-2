import { Component } from '@angular/core';
import { SortOption, SortService } from '../../services/sort-service';

@Component({
  selector: 'app-sort-bar',
  standalone: false,
  templateUrl: './sort-bar.html',
  styleUrl: './sort-bar.scss',
})
export class SortBar {

  constructor(private sortService: SortService) {}

  onSortChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    const sortOption: SortOption = value === '' ? null : (value as SortOption);
    this.sortService.setSort(sortOption);
  }

}
