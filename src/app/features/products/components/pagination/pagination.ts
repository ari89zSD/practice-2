import { Component, Input, OnDestroy } from '@angular/core';
import { PaginationService } from '../../services/pagination-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})
export class Pagination implements OnDestroy {

  @Input() totalItems = 0;
  @Input() pageSize = 9;

  currentPage = 1;
  private sub: Subscription;

  constructor(private pagination: PaginationService) {
    this.sub = this.pagination.page$.subscribe(page => {
      this.currentPage = page;
    });
  }

  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.pagination.setPage(page);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
