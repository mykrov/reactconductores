import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @param {{ sucursal: number }}
 * @returns {Array<object>}    
*/
export const obtenerDocumentoInternoPorSucursal = ({ sucursal }) => {
    const apiUrl = `${URLAPIGENERAL}/docinternos/buscar?sucursal=${sucursal}`;
    return axios.get(apiUrl).then(res => res.data);
}