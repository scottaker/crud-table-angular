import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromComplaints from '../complaints/complaints.reducer';
import { ComplaintsEffects } from 'src/app/store/complaints/complaints.effects';


export interface ApplicationState {

  [fromComplaints.complaintsFeatureKey]: fromComplaints.ComplaintState;
}

export const reducers: ActionReducerMap<ApplicationState> = {

  [fromComplaints.complaintsFeatureKey]: fromComplaints.reducer,
};

export const effects: Array<any> = [ComplaintsEffects];
export const metaReducers: MetaReducer<ApplicationState>[] = isDevMode() ? [] : [];
