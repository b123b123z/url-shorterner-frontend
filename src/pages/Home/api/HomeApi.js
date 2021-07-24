import ApiClient from '../../../api/ApiClient';

const getRedirectUrl = async (longUrl) => {
  return await ApiClient.post('/urls', {longUrl: longUrl});

};

export default getRedirectUrl;
