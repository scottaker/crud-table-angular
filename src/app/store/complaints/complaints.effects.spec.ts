import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ComplaintsEffects } from './complaints.effects';

describe('ComplaintsEffects', () => {
  let actions$: Observable<any>;
  let effects: ComplaintsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComplaintsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ComplaintsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
