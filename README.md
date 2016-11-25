# ember-cli-countries

This is an addon with some utils and helpers to get country names and calling codes given the country code.

## Usage

* `ember install ember-cli-countries`

## Utils

* `getCountryName (countryCode)` returns the country name (currently in EN_GB) given the country code
* `getCountryCallingCode (countryCode)` returns the country calling code (e.g. +1) given the country code

## Helpers

* `{{countryName code}}`
* `{{callingCode code}}`

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-countries`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
