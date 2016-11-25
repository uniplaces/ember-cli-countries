import Ember from 'ember';
import CallingCodes from 'ember-cli-countries/enums/calling-codes';

const { Helper, isEmpty } = Ember;

export function callingCode(countryCode) {
  if (isEmpty(countryCode)) {
      return 'not-found';
  }

  return CallingCodes[countryCode];
}

export default Helper.helper(callingCode);
