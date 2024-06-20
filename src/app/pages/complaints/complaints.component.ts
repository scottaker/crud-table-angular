import { Component, OnInit } from '@angular/core';
import { ComplaintResponse } from 'src/app/models';

@Component({
  selector: 'app-incidents',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  // data:ComplaintResponse;
  data: ComplaintResponse | undefined;
  constructor() {
    // this.data = null;
  }

  ngOnInit(): void {
  }

}
