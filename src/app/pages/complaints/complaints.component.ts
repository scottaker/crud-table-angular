import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComplaintRequest, ComplaintResponse, Paging, defaultComplaintRequest } from 'src/app/models';
import { ComplaintsActions } from 'src/app/store/complaints/complaints.actions';
import { selectComplaint } from 'src/app/store/complaints/complaints.selectors';
import { ApplicationState } from 'src/app/store/reducers';

@Component({
  selector: 'app-incidents',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {

  complaints$: Observable<ComplaintResponse | undefined>;

  constructor(private store: Store<ApplicationState>) {
    this.complaints$ = this.store.pipe(select(selectComplaint))
  }

  ngOnInit(): void {
    this.loadData();
    this.complaints$.subscribe(x => this.setComplaints(x));
  }

  setComplaints(complaints: ComplaintResponse | undefined): void {
    if (!complaints) return;
    console.log(complaints);
  }

  loadData() {
    const request = defaultComplaintRequest();// <ComplaintRequest>{ paging: <Paging>{ currentPage: 1, pageSize: 20 } };
    const action = ComplaintsActions.complaint_get({ request: request });
    this.store.dispatch(action);
  }

}
