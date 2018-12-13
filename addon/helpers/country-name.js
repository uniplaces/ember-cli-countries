import Helper from '@ember/component/helper';
import { isEmpty } from '@ember/utils';
import Countries from 'ember-cli-countries/enums/countries';

export function countryName(countryCode) {
  return isEmpty(countryCode) ? null : Countries[countryCode];
}

export default Helper.helper(countryName);
