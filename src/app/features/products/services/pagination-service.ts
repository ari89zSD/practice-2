import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {

  private pageSubject = new BehaviorSubject<number>(1);
  page$ = this.pageSubject.asObservable();

  //9 items per page
  private pageSizeSubject = new BehaviorSubject<number>(9);
  pageSize$ = this.pageSizeSubject.asObservable();

  setPage(page: number) {
    this.pageSubject.next(page);
  }

  setPageSize(size: number) {
    this.pageSizeSubject.next(size);
  }
  
}
