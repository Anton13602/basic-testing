// Uncomment the code below and write your tests
import {simpleCalculator, Action} from './index';

const testCases = [
  {a: 1, b: 2, action: Action.Add, expected: 3},
  {a: 2, b: 2, action: Action.Add, expected: 4},
  {a: 3, b: 2, action: Action.Add, expected: 5},
  {a: 3, b: 2, action: Action.Subtract, expected: 1},
  {a: 4, b: 2, action: Action.Subtract, expected: 2},
  {a: 8, b: 2, action: Action.Divide, expected: 4},
  {a: 2, b: 1, action: Action.Divide, expected: 2},
  {a: 2, b: 3, action: Action.Multiply, expected: 6},
  {a: 5, b: 3, action: Action.Multiply, expected: 15},
  {a: 2, b: 3, action: Action.Exponentiate, expected: 8},
  {a: 4, b: 2, action: Action.Exponentiate, expected: 16},
  {a: 4, b: 2, action: 'ss', expected: null},
  {a: '4a', b: 2, action: Action.Exponentiate, expected: null},
  {a: '4a', b: '2b', action: Action.Exponentiate, expected: null},
];

describe('simpleCalculator', () => {
  test.each(testCases)('should perform a b action and return expected', ({a, b, action, expected}) => {
    const result = simpleCalculator({a, b, action});
    if (expected === null) {
      expect(expected).toBeNull();
    } else {
      expect(result).toBe(expected);
    }
  });
});
