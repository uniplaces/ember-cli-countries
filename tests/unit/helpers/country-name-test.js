import { countryName } from 'dummy/helpers/country-name';
import { module, test } from 'qunit';

const TEST_CODE = 'PT';
const EXPECTED_NAME = 'Portugal';

module('Unit | Helper | country name', function() {
  test('it works', function(assert) {
    assert.expect(1);

    let name = countryName(TEST_CODE);

    assert.equal(name, EXPECTED_NAME);
  });

  test('it fails', function(assert) {
    assert.expect(1);

    let name = countryName();

    assert.equal(name, null);
  });
});
