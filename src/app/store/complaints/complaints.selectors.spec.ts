import * as fromComplaints from './complaints.reducer';
import { selectComplaintsState } from './complaints.selectors';

describe('Complaints Selectors', () => {
  it('should select the feature state', () => {
    const result = selectComplaintsState({
      [fromComplaints.complaintsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
