import {Action, simpleCalculator} from "./index";

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 5, b: 4, action: Action.Add });
    expect(result).toBe(9);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 5, b: 4, action: Action.Subtract });
    expect(result).toBe(1);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 5, b: 4, action: Action.Multiply });
    expect(result).toBe(20);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 4, b: 2, action: Action.Divide });
    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 4, b: 2, action: Action.Exponentiate });
    expect(result).toBe(16);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({ a: 4, b: 2, action: 'as' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const result = simpleCalculator({ a: '4', b: 2, action: Action.Exponentiate });
    expect(result).toBeNull();
  });
});
