/* eslint-disable class-methods-use-this */
import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @param {{ tabla: string }}
 * @returns {Array<object>}    
*/
export const listarPorTabla = ({ tabla }) => {
    const apiUrl = `${URLAPIGENERAL}/mantenimientogenerico/listarportabla?tabla=${tabla}`;
    return axios.get(apiUrl).then(res => res.data);
}

