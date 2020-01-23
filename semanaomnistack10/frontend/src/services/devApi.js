import axios from 'axios';

const devApi = axios.create({   
    baseURL: 'http://localhost:3333'    
});

export default devApi;