import { Component, Input, OnInit } from '@angular/core';
import { ComplaintResponse } from 'src/app/models/complaint';

@Component({
  selector: 'complaints-table',
  templateUrl: './complaints-table.component.html',
  styleUrls: ['./complaints-table.component.scss']
})
export class ComplaintsTableComponent implements OnInit {

  @Input() data: ComplaintResponse | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}
