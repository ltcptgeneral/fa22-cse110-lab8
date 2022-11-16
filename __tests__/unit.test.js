// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('test isPhoneNumber', () => {
	expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
  expect(functions.isPhoneNumber("987-654-3210")).toBe(true);
  expect(functions.isPhoneNumber("1111-11-1111")).toBe(false);
  expect(functions.isPhoneNumber("222-2A2-2222")).toBe(false);
});

test('test isEmail', () => {
  expect(functions.isEmail("example1@gmail.com")).toBe(true);
  expect(functions.isEmail("example2@domain.TLD")).toBe(true);
  expect(functions.isEmail("example3@bad-domain.x")).toBe(false);
  expect(functions.isEmail("this is not an email")).toBe(false);
});

test('test isStrongPassword', () => {
  expect(functions.isStrongPassword("goodpassword")).toBe(true);
  expect(functions.isStrongPassword("underscore_pass")).toBe(true);
  expect(functions.isStrongPassword("bad")).toBe(false);
  expect(functions.isStrongPassword("also_a_bad_password_because_it_is_too_long")).toBe(false);
});

test('test isDate', () => {
  expect(functions.isDate("1/2/2002")).toBe(true);
  expect(functions.isDate("10/20/2002")).toBe(true);
  expect(functions.isDate("10/20/20")).toBe(false);
  expect(functions.isDate("1000/20/2002")).toBe(false);
});

test('test isHexColor', () => {
  expect(functions.isHexColor("FFF")).toBe(true);
  expect(functions.isHexColor("010101")).toBe(true);
  expect(functions.isHexColor("G10")).toBe(false);
  expect(functions.isHexColor("1212121")).toBe(false);
});