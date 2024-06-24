import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ComplaintRequest, ComplaintResponse, Paging, defaultComplaintRequest } from 'src/app/models';
import { ComplaintsActions } from 'src/app/store/complaints/complaints.actions';
import { selectComplaint, selectComplaintLoading, selectComplaintRequest } from 'src/app/store/complaints/complaints.selectors';
import { ApplicationState } from 'src/app/store/reducers';

@Component({
  selector: 'app-incidents',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.scss']
})
export class ComplaintsComponent implements OnInit {


  complaints$: Observable<ComplaintResponse | undefined>;
  request$: Observable<ComplaintRequest | undefined>;
  loading$: Observable<boolean|null>;

  // ----- Startup -----
  constructor(private store: Store<ApplicationState>) {
    this.complaints$ = this.store.pipe(select(selectComplaint))
    this.request$ = this.store.pipe(select(selectComplaintRequest))
    this.loading$ = this.store.pipe(select(selectComplaintLoading))
  }

  ngOnInit(): void {
    this.loadData();
    this.complaints$.subscribe(x => this.setComplaints(x));
  }

  // -- data management --

  setComplaints(complaints: ComplaintResponse | undefined): void {
    if (!complaints) return;
    console.log(complaints);
  }

  loadData() {
    const request = defaultComplaintRequest();// <ComplaintRequest>{ paging: <Paging>{ currentPage: 1, pageSize: 20 } };
    // const setRequestAction = ComplaintsActions.complaint_request({ request: request });
    const action = ComplaintsActions.complaint_get({ request: request });
    this.store.dispatch(action);
  }

  // -- page events

  onPaging(pageNumber: any) {

    // console.log(pageNumber);
    // const page = $event.pageIndex;
    const action = ComplaintsActions.complaint_page({ page: pageNumber });
    this.store.dispatch(action);
  }

}
