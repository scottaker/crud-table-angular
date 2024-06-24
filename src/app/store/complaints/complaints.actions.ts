import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { ComplaintRequest, ComplaintResponse } from 'src/app/models';

export const ComplaintsActions = createActionGroup({
  source: 'Complaints',
  events: {

    'complaint': emptyProps(),
    'complaint_get': props<{ request: ComplaintRequest }>(),
    'complaint_set': props<{ response: ComplaintResponse }>(),
    // 'complaint_request': props<{ request: ComplaintRequest }>(),
    'complaint_page': props<{ page: number }>(),
    'complaint_success': props<{ data: unknown }>(),
    'complaint_failure': props<{ error: unknown }>(),
  }
});
