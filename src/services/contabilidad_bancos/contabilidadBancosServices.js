import axios from "axios";
import { URLAPIGENERAL } from "../../config";

const sucursal = JSON.parse(window.localStorage.getItem('sucursal'));

/**
 * @returns {Array<object>}    
*/
export const listarCuentasContables = () => {
    const apiUrl = `${URLAPIGENERAL}/cuentascontables/Listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const listarBancos = () => {
    const apiUrl = `${URLAPIGENERAL}/bancos/listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Promise<Array<object>>}    
*/
export const listarBeneficiarios = () => {
    const apiUrl = `${URLAPIGENERAL}/beneficiarios/listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const listarMovimientoBancos = () => {
    const apiUrl = `${URLAPIGENERAL}/movimientobancos/listar`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const listarMedioPagos = () => {
    const apiUrl = `${URLAPIGENERAL}/mantenimientogenerico/listarportabla?tabla=CXC_MEDIOPAGO_INT`;
    return axios.get(apiUrl).then(res => res.data);
}
/**
 * @returns {Array<object>}    
*/
export const listarDocInterno = () => {
    const apiUrl = `${URLAPIGENERAL}/docinternos/buscar?sucursal=${sucursal}`;
    console.log(apiUrl);
    return axios.get(apiUrl).then(res => res.data);
}