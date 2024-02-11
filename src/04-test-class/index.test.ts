// Uncomment the code below and write your tests
import {getBankAccount, InsufficientFundsError, SynchronizationFailedError, TransferFailedError} from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const num = 10;
    const bankAccount = getBankAccount(num);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(num);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(10);
    const withdraw = () => bankAccount.withdraw(20);
    expect(withdraw).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const bankAccount1 = getBankAccount(100);
    const bankAccount2 = getBankAccount(10);
    const transfer = () => bankAccount2.transfer(50, bankAccount1);
    expect(transfer).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    const bankAccount = getBankAccount(100);
    const transfer = () => bankAccount.transfer(50, bankAccount);
    expect(transfer).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const num = 10;
    const num2 = 80;
    const bankAccount = getBankAccount(num);
    bankAccount.deposit(num2);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(num + num2);
  });

  test('should withdraw money', () => {
    const num = 10;
    const num2 = 80;
    const bankAccount = getBankAccount(num2);
    bankAccount.withdraw(num);
    const balance = bankAccount.getBalance();
    expect(balance).toBe(num2 - num);
  });

  test('should transfer money', () => {
    const bankAccount1 = getBankAccount(100);
    const bankAccount2 = getBankAccount(10);
    bankAccount1.transfer(50, bankAccount2);
    const balance1 = bankAccount1.getBalance();
    const balance2 = bankAccount2.getBalance();
    expect(balance1).toBe(50);
    expect(balance2).toBe(60);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bankAccount = getBankAccount(100);
    const balance = await bankAccount.fetchBalance();
    const type = typeof balance;
    expect(type).toBe('number');
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(100);
    await bankAccount.synchronizeBalance();
    const balance = bankAccount.getBalance();
    const type = typeof balance;
    expect(type).toBe('number');
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(100);

    const mockFetchBalance = jest.fn(() => Promise.resolve(null));
    bankAccount.fetchBalance = mockFetchBalance;
    const synchronize = () => bankAccount.synchronizeBalance()
    await expect(synchronize).rejects.toThrow(SynchronizationFailedError);
  });
});
