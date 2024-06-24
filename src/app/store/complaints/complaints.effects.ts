import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { Store } from '@ngrx/store';

// -- LOCAL --
import { ComplaintRequest, ComplaintResponse } from 'src/app/models';
import { ComplaintsActions } from './complaints.actions';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { ComplaintState } from 'src/app/store/complaints/complaints.reducer';
import { selectComplaintRequest } from 'src/app/store/complaints/complaints.selectors';



@Injectable()
export class ComplaintsEffects {


  complaintComplaints$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ComplaintsActions.complaint_failure),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ComplaintsActions.complaint_success({ data })),
          catchError(error => of(ComplaintsActions.complaint_failure({ error }))))
      )
    );
  });

  fetchDataOnPagingChange$ = createEffect(() => this.actions$.pipe(
    ofType(ComplaintsActions.complaint_page),
    withLatestFrom(this.store.select(selectComplaintRequest)),

    filter(x => x != null),
    tap(x => console.log(x)),
    mergeMap(([paging, request]) =>
      this.service.getComplaints(<ComplaintRequest>request).pipe(
        map(data => ComplaintsActions.complaint_set({ response: data })),
        catchError(error => this.handleError(error))
      )
    )
  ));

  complaintsGet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComplaintsActions.complaint_get),
      switchMap(x => this.service.getComplaints(x.request).pipe(
        map(response => this.service.scrubComplaints(response)),
        map(response => ComplaintsActions.complaint_set({ response: <ComplaintResponse>response })),
        catchError(err => this.handleError(err))
      )),
    ));

  handleError(err: any): Observable<any> {
    const action = ComplaintsActions.complaint_failure(err);
    // logging
    return of(action);
  }

  constructor(
    private actions$: Actions,
    private service: ComplaintService,
    private store: Store<ComplaintState>
  ) { }
}
