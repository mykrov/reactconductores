import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @param {{ pagina: number, registros: number }}
 * @returns {Array<object>}   
*/
export const listarClientes = ({ pagina, registros }) => {
    const apiUrl = `${URLAPIGENERAL}/clientes/listar?pagina=${pagina}&registros=${registros}`;
    return axios.get(apiUrl).then(res => res.data);
}

/**
 * @param {{ cliente: string }}
 * @returns {Array<object>}    
*/
export const buscarClientesEnLinea = ({ cliente }) => {
    const apiUrl = `${URLAPIGENERAL}/clientes/buscarfueradelinea?busqueda=${cliente}`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const obtenerPrimerUltimoCliente = () => {
    const apiUrl = `${URLAPIGENERAL}/clientes/listarprimerultimo`;
    return axios.get(apiUrl).then(res => res.data);
}