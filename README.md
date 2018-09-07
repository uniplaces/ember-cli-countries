# ember-cli-countries

[![npm version](https://badge.fury.io/js/ember-cli-countries.svg)](https://badge.fury.io/js/ember-cli-countries)
[![Build Status](https://travis-ci.org/uniplaces/ember-cli-countries.svg?branch=master)](https://travis-ci.org/uniplaces/ember-cli-countries)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-countries.svg)](https://emberobserver.com/addons/ember-cli-countries)
[![dependencies](https://david-dm.org/uniplaces/ember-cli-countries.svg)](https://david-dm.org/uniplaces/ember-cli-countries)
[![devDependencies](https://david-dm.org/uniplaces/ember-cli-countries/dev-status.svg)](https://david-dm.org/uniplaces/ember-cli-countries?type=dev)

This is an addon with some utils and helpers to get country names and calling codes given the country code.

## Usage

* `ember install ember-cli-countries`

## Utils

* `getCountryName (countryCode)` returns the country name (currently in EN_GB) given the country code
* `getCountryCallingCode (countryCode)` returns the country calling code (e.g. +1) given the country code

## Helpers

* `{{country-name code}}`
* `{{country-calling-code code}}`

## Contributing

Any contribution is welcome. Please read our [guidelines](CONTRIBUTING.md).
However, if your contribution involves adding a new feature, please open an issue before to
share your plan and agree the details of the feature before starting implementing it.

## License

This project is licensed under the [MIT License](LICENSE.md).
