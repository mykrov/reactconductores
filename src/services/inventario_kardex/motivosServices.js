import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @returns {Array<object>}  
 */
export const obtenerTodosLosMotivos = () => {
    const apiUrl = `${URLAPIGENERAL}/motivos/listar`;
    return axios.get(apiUrl).then(res => res.data);
}