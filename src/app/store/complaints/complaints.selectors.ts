import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromComplaints from './complaints.reducer';

export const selectComplaintsState = createFeatureSelector<fromComplaints.ComplaintState>(
  fromComplaints.complaintsFeatureKey
);
