import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagingComponent } from 'src/app/components/paging/paging.component';
import { ComplaintResponse } from 'src/app/models/complaint';
import { PageEvent, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'complaints-table',
  // imports: [PagingComponent],
  templateUrl: './complaints-table.component.html',
  styleUrls: ['./complaints-table.component.scss']
})
export class ComplaintsTableComponent implements OnInit {


  @Input() data: ComplaintResponse | undefined | null;
  @Input() loading: boolean | null = false;
  @Output() page: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }

  ngOnInit(): void {

  }


  onPaging(value: any) {
    // console.log(value);
    this.page.emit(value);
  }

}
