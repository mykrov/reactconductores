import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @returns {Array<object>}  
*/
export const listarTipoAjustes = () => {
    const apiUrl = `${URLAPIGENERAL}/tipoajusteinv/listar`;
    return axios.get(apiUrl).then(res => res.data);
}