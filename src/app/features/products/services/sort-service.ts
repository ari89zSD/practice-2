import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SortOption = 'price-asc' | 'price-desc' | 'rating-desc' | null;

@Injectable({
  providedIn: 'root',
})
export class SortService {

  private sortSubject = new BehaviorSubject<SortOption>(null);
  sort$ = this.sortSubject.asObservable();

  setSort(sortOption: SortOption) {
    this.sortSubject.next(sortOption);
  }
  
}
