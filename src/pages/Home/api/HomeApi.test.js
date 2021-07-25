import ApiClient from '../../../api/ApiClient';
import getRedirectUrl from './HomeApi';

describe('HomeApi', () => {
  describe('getRedirectUrl', () => {
    it('should be able to generate a redirect url', async () => {
      const mockResponse = 'http://url-shorterner-server.herokuapp.com/a_2xcwtYs'
      const mockedAxios = jest.spyOn(ApiClient, 'post').mockResolvedValue(mockResponse);
      const mockLongUrl = 'http://example.com/';
      const data = await getRedirectUrl(mockLongUrl);
      expect(data).toMatch(mockResponse);
    });
  });
});
