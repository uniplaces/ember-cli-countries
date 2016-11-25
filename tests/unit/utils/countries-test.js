import countries from 'dummy/utils/countries';
import { module, test } from 'qunit';

module('Unit | Utility | countries');

const TEST_CODE = 'PT';
const EXPECTED_NAME = 'Portugal';
const EXPECTED_CALLING_CODE = '+351';
const EXPECTED_TOTAL = 244;

test('getCountryName works', function(assert) {
  assert.expect(1);

  let name = countries.getCountryName(TEST_CODE);

  assert.equal(name, EXPECTED_NAME);
});

test('getCountryName returns null', function(assert) {
  assert.expect(1);

  let name = countries.getCountryName('');

  assert.equal(name, null);
});

test('getCountryCallingCode works', function(assert) {
  assert.expect(1);

  let callingCode = countries.getCountryCallingCode(TEST_CODE);

  assert.equal(callingCode, EXPECTED_CALLING_CODE);
});

test('getCountryCallingCode works', function(assert) {
  assert.expect(1);

  let callingCode = countries.getCountryCallingCode('');

  assert.equal(callingCode, null);
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
