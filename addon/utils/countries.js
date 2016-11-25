import Ember from 'ember';
import Countries from 'ember-cli-countries/enums/countries';
import CallingCodes from 'ember-cli-countries/enums/calling-codes';

const { Logger } = Ember;

export function getCountryName(countryCode) {
  let name = Countries[countryCode];

  if (!name) {
    Logger.error(`The country with code ${countryCode} was not found`);

    return null;
  }

  return name;
}

export function getCountryCallingCode(countryCode) {
  let callingCode = CallingCodes[countryCode];

  if (!callingCode) {
    Logger.error(`The country with code ${countryCode} was not found`);

    return null;
  }

  return callingCode;
}
