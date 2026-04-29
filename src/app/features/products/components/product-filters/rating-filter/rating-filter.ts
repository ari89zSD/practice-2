import { Component } from '@angular/core';
import { FilterService } from '../../../services/filter-service';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-rating-filter',
  standalone: false,
  templateUrl: './rating-filter.html',
  styleUrl: './rating-filter.scss',
})
export class RatingFilter {
  ratings = [1, 2, 3, 4];

  constructor(private filterService: FilterService) {}

  onChange(event: MatButtonToggleChange) {
    this.filterService.setRating(event.value);
  }

}
