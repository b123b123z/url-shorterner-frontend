import axios from 'axios';

const API_URL = 'http://url-shorterner-server.herokuapp.com';

const ApiClient = axios.create({ baseURL: API_URL, withCredentials: false });

export default ApiClient;
