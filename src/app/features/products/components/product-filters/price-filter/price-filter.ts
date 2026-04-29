import { Component } from '@angular/core';
import { FilterService } from '../../../services/filter-service';

@Component({
  selector: 'app-price-filter',
  standalone: false,
  templateUrl: './price-filter.html',
  styleUrl: './price-filter.scss',
})
export class PriceFilter {
  min = 0;
  max = 500;

  constructor(private filterService: FilterService) {}

  onMinChange(value: number) {
    this.min = value;
    this.filterService.setPrice([this.min, this.max]);
  }

  onMaxChange(value: number) {
    this.max = value;
    this.filterService.setPrice([this.min, this.max]);
  }
}
