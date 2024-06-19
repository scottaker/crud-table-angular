import { Component, OnInit } from '@angular/core';
import { ComplaintResponse } from 'src/app/models';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {

  // data:ComplaintResponse;
  data: ComplaintResponse | undefined;
  constructor() {
    // this.data = null;
  }

  ngOnInit(): void {
  }

}
