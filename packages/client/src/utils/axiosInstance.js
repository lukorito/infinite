import axios from 'axios';

export default axios.create({
    baseURL: 'https://mysterious-falls-95987.herokuapp.com',
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' },
});
