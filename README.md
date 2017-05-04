# ember-cli-countries

[![npm version](https://badge.fury.io/js/ember-cli-countries.svg)](https://badge.fury.io/js/ember-cli-countries)
[![Build Status](https://travis-ci.org/uniplaces/ember-cli-countries.svg?branch=master)](https://travis-ci.org/uniplaces/ember-cli-countries)
[![dependencies](https://david-dm.org/uniplaces/ember-cli-countries.svg)](https://david-dm.org/uniplaces/ember-cli-countries)
[![devDependencies](https://david-dm.org/uniplaces/ember-cli-countries/dev-status.svg)](https://david-dm.org/uniplaces/ember-cli-countries?type=dev)

This is an addon with some utils and helpers to get country names and calling codes given the country code.

## Usage

* `ember install ember-cli-countries`

## Utils

* `getCountryName (countryCode)` returns the country name (currently in EN_GB) given the country code
* `getCountryCallingCode (countryCode)` returns the country calling code (e.g. +1) given the country code

## Helpers

* `{{countryName code}}`
* `{{countryCallingCode code}}`

## License

The MIT License (MIT)

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
