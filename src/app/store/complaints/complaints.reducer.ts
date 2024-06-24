import { createFeature, createReducer, on } from '@ngrx/store';
import { ComplaintsActions } from './complaints.actions';
import { ComplaintRequest, ComplaintResponse, Paging } from 'src/app/models';

export const complaintsFeatureKey = 'complaints';

export interface ComplaintState {
  complaints: ComplaintResponse | undefined,
  request: ComplaintRequest | undefined,
  loading: boolean,
  is_error: boolean,
  error: any
}

export const initialState: ComplaintState = {
  complaints: undefined,
  request: undefined,
  is_error: false,
  loading: false,
  error: undefined
};

export const reducer = createReducer(
  initialState,
  on(ComplaintsActions.complaint, state => state),
  on(ComplaintsActions.complaint_get, (state, action) => ({
    ...state,
    request: action.request,
    loading: true
  })),
  on(ComplaintsActions.complaint_set, (state, action) => ({
    ...state,
    loading: false,
    complaints: action.response
  })),

  on(ComplaintsActions.complaint_page, (state, action) => {
    console.log(action);
    return ({
      ...state,
      loading: true,
      request: <ComplaintRequest>{
        ...state.request,
        paging: <Paging>{
          ...state.request?.paging,
          currentPage: action.page
        }
      }
    })
  }),

  on(ComplaintsActions.complaint_success, (state, action) => ({ state, ...state, error: false })),
  on(ComplaintsActions.complaint_failure, (state, action) => ({
    state, ...state,
    error: action.error,
    is_error: true
  })),
);

export const complaintsFeature = createFeature({
  name: complaintsFeatureKey,
  reducer,
});

