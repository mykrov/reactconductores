import axios from 'axios';
import { URLAPIGENERAL } from '../../config';

/**
 * @param {{ proveedor: string }}
 */
export const buscarProveedorEnLinea = ({ proveedor }) => {
  const apiUrl = `${URLAPIGENERAL}/proveedores/buscarenlinea?busqueda=${proveedor}`;
  return axios.get(apiUrl).then((res) => res.data);
};

/**
 * @returns {Array<object>}
 */
export const ListarProveedores = () => {
  const apiUrl = `${URLAPIGENERAL}/proveedores/listar`;
  return axios.get(apiUrl).then((res) => res.data);
};
