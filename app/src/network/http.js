import axios from "axios"
const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 4000,
    headers:{
        "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"16182898373160717972733953","bc":"110100"}',
        'X-Host':"mall.film-ticket.film.info"
               }
  });
  export default http 