import { callingCode } from 'dummy/helpers/calling-code';
import { module, test } from 'qunit';

const TEST_CODE = 'PT';
const EXPECTED_CALLING_CODE = '+351';

module('Unit | Helper | calling code');

test('it works', function(assert) {
  assert.expect(1);

  let cc = callingCode(TEST_CODE);

  assert.equal(cc, EXPECTED_CALLING_CODE);
});
