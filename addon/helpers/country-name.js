import Ember from 'ember';
import Countries from 'ember-cli-countries/enums/countries';

const { Helper, isEmpty } = Ember;

export function countryName(countryCode) {
  if (isEmpty(countryCode)) {
      return 'not-found';
  }

  return Countries[countryCode];
}

export default Helper.helper(countryName);
