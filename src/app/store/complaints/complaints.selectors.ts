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
export const selectComplaintRequest = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state?.request
);
export const selectComplaintLoading = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state?.loading
);
export const selectComplaintError = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state?.error
);

// Selector for all books
export const selectAllBooks = createSelector(
  selectComplaintsState,
  (state: fromComplaints.ComplaintState) => state.complaints
);