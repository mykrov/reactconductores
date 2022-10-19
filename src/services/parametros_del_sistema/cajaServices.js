import axios from 'axios';
import { URLAPIGENERAL } from '../../config';

/**
 *@returns {Array<object>}
 */
export const listarCajas = () => {
  const apiUrl = `${URLAPIGENERAL}/caja/listar`;
  return axios.get(apiUrl).then((res) => res.data);
};
