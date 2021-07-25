import ApiClient from '../../../api/ApiClient';

const getRedirectUrl = (longUrl) => ApiClient.post('/urls', { longUrl });

export default getRedirectUrl;
