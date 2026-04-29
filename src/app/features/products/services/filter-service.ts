import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
  private categorySubject = new BehaviorSubject<string | null>(null);
  private priceSubject = new BehaviorSubject<[number, number] | null>(null);
  private ratingSubject = new BehaviorSubject<number | null>(null);
  private searchSubject = new BehaviorSubject<string>('');

  category$ = this.categorySubject.asObservable();
  price$ = this.priceSubject.asObservable();
  rating$ = this.ratingSubject.asObservable();
  search$ = this.searchSubject.asObservable();

  setCategory(category: string | null) {
    this.categorySubject.next(category);
  }

  setPrice(range: [number, number] | null) {
    this.priceSubject.next(range);
  }

  setRating(rating: number | null) {
    this.ratingSubject.next(rating);
  }

  setSearch(query: string) {
    this.searchSubject.next(query);
  }
}
