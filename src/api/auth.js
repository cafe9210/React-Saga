import axios from 'axios';
export const loginApi = () => {    // {status}
    console.log(1);
    axios.post('/').then(response=>{
    console.log(123123,response.data.status);
})};
// export const loginApi = (message) => {    // {status}
//     console.log(1);
//     axios.post('/', message)
// };
export const checkApi = () => axios.get('/')
