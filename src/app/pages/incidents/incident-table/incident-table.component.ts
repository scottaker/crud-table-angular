import { Component, Input, OnInit } from '@angular/core';
import { ComplaintResponse } from 'src/app/models/complaint';

@Component({
  selector: 'incident-table',
  templateUrl: './incident-table.component.html',
  styleUrls: ['./incident-table.component.scss']
})
export class IncidentTableComponent implements OnInit {

  @Input() data: ComplaintResponse | undefined;

  constructor() {

  }

  ngOnInit(): void {
  }

}
