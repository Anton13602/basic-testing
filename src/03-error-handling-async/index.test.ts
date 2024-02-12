// Uncomment the code below and write your tests
import {throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError} from './index';



describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    const result = await resolveValue(2);
    expect(result).toBe(2);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMessage = 'Error';
    const result = () => {
      throwError(errorMessage);
    }
    expect(result).toThrow(errorMessage);
  });

  test('should throw error with default message if message is not provided', () => {
    const errorMessage = 'Oops!';
    const result = () => {
      throwError();
    }
    expect(result).toThrow(errorMessage);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const result = () => {
      throwCustomError();
    }
    expect(result).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(MyAwesomeError);
  });
});
