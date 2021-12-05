
import axios from 'axios';
axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`,'withCredentials':true}
export default axios;