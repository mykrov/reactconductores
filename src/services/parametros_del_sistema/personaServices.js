import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @returns {Array<object>}  
 */
export const listarPersonas = () => {
    const apiUrl = `${URLAPIGENERAL}/personas/Listar`;
    return axios.get(apiUrl).then(res => res.data);
}