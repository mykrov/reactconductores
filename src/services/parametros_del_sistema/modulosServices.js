import axios from "axios";
import { URLAPIGENERAL, URLAPILOCAL } from "../../config";

/**
 * @returns {Array<object>}  
 */
export const listarModulos = () => {
    const apiUrl = `${URLAPILOCAL}/modulo/listar`;
    return axios.get(apiUrl).then(res => res.data);
}