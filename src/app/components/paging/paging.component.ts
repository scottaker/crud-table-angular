import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { Paging } from 'src/app/models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'paging',
  // imports: [MatPaginatorModule],
  templateUrl: './paging.component.html',
  styleUrl: './paging.component.scss',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagingComponent {

  @Input() paging: Paging | undefined;
  @Input() showFirstLast: boolean = false;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  onPaging($event: PageEvent) {
    console.log($event);
    const page = $event.pageIndex;
    this.page.emit(page);
  }

}
