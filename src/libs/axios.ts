import originalAxios from 'axios';

const axios = originalAxios.create();

// axios default settings
axios.defaults.timeout = 2500;
axios.defaults.headers = {
    'Content-Type': 'x-www-form-urlencoded', // default content type
    'Access-Control-Allow-Origin': '*'
};

export default axios;
