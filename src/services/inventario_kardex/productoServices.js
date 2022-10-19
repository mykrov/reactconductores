import axios from "axios";
import { URLAPIGENERAL } from "../../config";

/**
 * @param {{ producto: string }}
 * @returns {Array<object>}    
*/
export const buscarProductosEnLinea = ({ producto }) => {
    const apiUrl = `${URLAPIGENERAL}/producto/nombrefulltext?caracteres=${producto}`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @param {{ pagina: number, cantidad: number }}
 * @returns {Array<object>}    
*/
export const obtenerProductosPaginados = ({ pagina, cantidad }) => {
    const apiUrl = `${URLAPIGENERAL}/producto/paginar?currentPageNumber=${pagina}&pageSize=${cantidad}`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const listarCategorias = () => {
    const apiUrl = `${URLAPIGENERAL}/nivel1/listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @param {{ categoria: string }}
 * @returns {Array<object>}    
*/
export const listarFamilias = ({ categoria }) => {
    const apiUrl = `${URLAPIGENERAL}/nivel2/filtrarnivel1?codigo=${categoria}`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @param {{ familia: string }}
 * @returns {Array<object>}    
*/
export const listarLineas = ({ familia }) => {
    const apiUrl = `${URLAPIGENERAL}/nivel3/filtrarnivel2?nivel2=${familia}`;
    return axios.get(apiUrl).then(res => res.data);
}