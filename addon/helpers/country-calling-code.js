import Ember from 'ember';
import CallingCodes from 'ember-cli-countries/enums/calling-codes';

const { Helper, isEmpty } = Ember;

export function countryCallingCode(countryCode) {
  if (isEmpty(countryCode)) {
    return null;
  }

  return CallingCodes[countryCode];
}

export default Helper.helper(countryCallingCode);
