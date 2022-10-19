import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @returns {Array<object>}  
 */
export const listarSucursales = () => {
    const apiUrl = `${URLAPIGENERAL}/sucursales/listar`;
    return axios.get(apiUrl).then(res => res.data);
}