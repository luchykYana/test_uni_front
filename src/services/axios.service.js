const axios = require('axios');

const axiosNewsService = axios.create({
    baseURL: 'http://localhost:5000'
});

export {axiosNewsService};
