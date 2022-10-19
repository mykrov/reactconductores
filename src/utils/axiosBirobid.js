import axios from 'axios';
import { Navigate } from 'react-router';
import { PATH_AUTH } from '../routes/paths';

const { token } = JSON.parse(window.localStorage.getItem('session'));
const axiosInst = axios.create({
  headers: {
    Authorization: `Bearer ${token}`,
  }
})

axiosInst.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log('TOKEN VENCIDO, NO AUTORIZADO');
      return <Navigate to={PATH_AUTH.login} />
    }
    return Promise.reject(error);
  }
)



export default axiosInst;