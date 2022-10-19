import axios from "axios";
import { URLAPIGENERAL } from "../../config";
/**
 * @returns {Array<object>}  
 */
export const obtenerTodasLasBodegas = () => {
    const apiUrl = `${URLAPIGENERAL}/bodegas/listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @param {{ sucursal: number }}
 * @returns {Array<object>}    
*/
export const obtenerBodegasPorSucursal = ({ sucursal }) => {
    const apiUrl = `${URLAPIGENERAL}/bodegas/obtenerporsucursal?sucursal=${sucursal}`;
    return axios.get(apiUrl).then(res => res.data);
}