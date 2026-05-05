// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('valid phone number 1', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number 1', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number 2', () => {
  expect(isPhoneNumber('(123) 456-789')).toBe(false);
});

// isEmail tests
test('invalid email 1', () => {
  expect(isEmail('')).toBe(false);
});

test('invalid email 2', () => {
  expect(isEmail('gmail.com')).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail('helloworld@gmail.com')).toBe(true);
});

test('valid email 2', () => {
  expect(isEmail('username@n.us')).toBe(true);
});

// isStrongPassword tests
test('valid password 1', () => {
  expect(isStrongPassword('password123')).toBe(true);
});

test('valid password 2', () => {
  expect(isStrongPassword('Password_123')).toBe(true);
});