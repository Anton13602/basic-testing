// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  test('should create instance with provided base url', async () => {
    const axiosCreate = jest.spyOn(axios, 'create');
    await throttledGetDataFromApi('/users');
    expect(axiosCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    jest.spyOn(axios, 'create').mockReturnThis();
    jest.spyOn(axios, 'get');
    await throttledGetDataFromApi('/users');
    jest.runAllTimers();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });


  test('should return response data', async () => {
    jest.spyOn(axios, 'create').mockReturnThis();
    jest.spyOn(axios, 'get').mockResolvedValue({data: 'test'});
    const answer = await throttledGetDataFromApi('/users');
    expect(answer).toEqual('test');
  });
});
