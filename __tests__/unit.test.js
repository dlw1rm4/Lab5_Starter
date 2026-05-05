// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('tests password: 1234abcd', () => {
    expect(isStrongPassword('1234abcd')).toBe(false);
});

test('tests password: xyz', () => {
    expect(isStrongPassword('xyz')).toBe(false);
});
