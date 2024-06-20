import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { ComplaintsActions } from './complaints.actions';
import { ComplaintService } from 'src/app/shared/services/complaint.service';
import { ComplaintRequest, ComplaintResponse } from 'src/app/models';


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

  constructor(private actions$: Actions, private service: ComplaintService) { }
}
