import Ember from 'ember';
import { module, test } from 'qunit';
import countries from 'dummy/utils/countries';

module('Unit | Utility | countries');

const { Logger } = Ember;

const TEST_CODE = 'PT';
const EXPECTED_NAME = 'Portugal';
const EXPECTED_CALLING_CODE = '+351';
const EXPECTED_TOTAL = 244;

test('getCountryName works', function(assert) {
  assert.expect(1);

  let name = countries.getCountryName(TEST_CODE);

  assert.equal(name, EXPECTED_NAME);
});

test('getCountryName returns null and logs error on empty string', function(assert) {
  assert.expect(2);

  let oldError = Logger.error;
  let expectedErrorMessage = 'The country with code  was not found'
  Logger.error = function(message) {
    assert.equal(message, expectedErrorMessage);
  };

  let name = countries.getCountryName('');

  assert.equal(name, null);

  Logger.error = oldError;
});

test('getCountryName returns null and logs error on inexistent country code', function(assert) {
  assert.expect(2);

  let oldError = Logger.error;
  let expectedErrorMessage = 'The country with code en_PT was not found'
  Logger.error = function(message) {
    assert.equal(message, expectedErrorMessage);
  };

  let name = countries.getCountryName('en_PT');

  assert.equal(name, null);

  Logger.error = oldError;
});

test('getCountryCallingCode returns the expected calling code', function(assert) {
  assert.expect(1);

  let callingCode = countries.getCountryCallingCode(TEST_CODE);

  assert.equal(callingCode, EXPECTED_CALLING_CODE);
});

test('getCountryCallingCode returns null and logs error on empty string', function(assert) {
  assert.expect(2);

  let oldError = Logger.error;
  let expectedErrorMessage = 'The country with code  was not found';
  Logger.error = function(message) {
    assert.equal(message, expectedErrorMessage);
  };

  let callingCode = countries.getCountryCallingCode('');

  assert.equal(callingCode, null);

  Logger.error = oldError;
});

test('getCountryCallingCode returns null and logs error on unexistent country', function(assert) {
  assert.expect(2);

  let oldError = Logger.error;
  let expectedErrorMessage = 'The country with code en_DE was not found';
  Logger.error = function(message) {
    assert.equal(message, expectedErrorMessage);
  };

  let callingCode = countries.getCountryCallingCode('en_DE');

  assert.equal(callingCode, null);

  Logger.error = oldError;
});

test('getAllCountryNames works', function(assert) {
  assert.expect(1);

  let names = countries.getAllCountryNames();

  assert.equal(names.length, EXPECTED_TOTAL);
});

test('getAllCountryCallingCodes works', function(assert) {
  assert.expect(1);

  let callingCodes = countries.getAllCountryCallingCodes();

  assert.equal(callingCodes.length, EXPECTED_TOTAL);
});
