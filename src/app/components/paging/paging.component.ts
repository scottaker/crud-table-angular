import { PageEvent } from '@angular/material/paginator';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from 'src/app/models';

@Component({
  selector: 'paging',
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss',
})
export class PagingComponent {

  @Input() paging: Paging | undefined;
  @Input() showFirstLast: boolean = false;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  onPaging($event: PageEvent) {
    const page = $event.pageIndex;
    this.page.emit(page);
  }

}
