import Validator from '../index';

test('test for all good - regExp', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user123koka');
  expect(result).toBeTruthy();
});

test('test for latin letters only', () => {
  const validator = new Validator();
  const result = validator.validateUsername('userВалера123koka');
  expect(result).toBe('Имя пользователя может содержать только латинские буквы, цифры, символы тире и подчёркивания.');
});

test('test for just 3 figures in a row', () => {
  const validator = new Validator();
  const result = validator.validateUsername('user1234koka');
  expect(result).toBe('Имя пользователя не должно содержать более трех цифр подряд.');
});

test('no figures or underscope in the begin or end', () => {
  const validator = new Validator();
  const result = validator.validateUsername('1user123koka');
  expect(result).toBe('Имя пользователя не должно начинаться или заканчиваться цифрами, символами подчёркивания или тире.');
});
