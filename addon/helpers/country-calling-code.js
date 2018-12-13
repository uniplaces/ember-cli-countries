import Helper from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import CallingCodes from 'ember-cli-countries/enums/calling-codes';

export function countryCallingCode(countryCode) {
  return isEmpty(countryCode) ? null : CallingCodes[countryCode];
}

export default Helper.helper(countryCallingCode);
