import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComplaints from './complaints.reducer';

// Feature selector
export const selectComplaintsState = createFeatureSelector<fromComplaints.ComplaintState>(fromComplaints.complaintsFeatureKey);


// export const selectComplaintsState = createFeatureSelector<fromComplaints.ComplaintState>(
//   fromComplaints.complaintsFeatureKey
// );
export const selectComplaint = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state?.complaints
);

// Selector for all books
export const selectAllBooks = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state.complaints
);