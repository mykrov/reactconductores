import axios from 'axios';
import { URLAPIGENERAL } from '../../config';


/**
 * @returns {Array<object>}
 */
export const ListarBeneficiario = () => {
  const apiUrl = `${URLAPIGENERAL}/beneficiarios/listar`;
  return axios.get(apiUrl).then((res) => res.data);
};

