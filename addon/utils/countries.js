import Countries from 'ember-cli-countries/enums/countries';
import CallingCodes from 'ember-cli-countries/enums/calling-codes';

export function getCountryName(countryCode) {
  let name = Countries[countryCode];

  if (!name) {
    console.error(`The country with code ${countryCode} was not found`);

    return null;
  }

  return name;
}

export function getCountryShortCode(countryCode) {
  let country = Countries[countryCode];

  if (!country) {
    console.error(`The country with code ${countryCode} was not found`);

    return null;
  }

  return countryCode.substring(0, 2);
}

export function getCountryCallingCode(countryCode) {
  let callingCode = CallingCodes[countryCode];

  if (!callingCode) {
    console.error(`The country with code ${countryCode} was not found`);

    return null;
  }

  return callingCode;
}

export function getAllCountryNames() {
  return Countries.toKeyValueJson();
}

export function getAllCountryCallingCodes() {
  return CallingCodes.toKeyValueJson();
}
