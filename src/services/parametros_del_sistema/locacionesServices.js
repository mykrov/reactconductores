/* eslint-disable class-methods-use-this */
import axios from "axios";
import { URLAPIGENERAL } from "../../config";

class LocacionesServices {
    /**
     * @returns {Promise<Array<object>>}  
     */
    listarProvincias() {
        const apiUrl = `${URLAPIGENERAL}/provincias/listar`;
        return axios.get(apiUrl).then(res => res.data);
    }

    /**
     * @param {{ provincia: string }}
     * @returns {Promise<Array<object>>}    
    */
    listarCantones({ provincia }) {
        const apiUrl = `${URLAPIGENERAL}/cantones/buscarporprovincia?provincia=${provincia}`;
        return axios.get(apiUrl).then(res => res.data);
    }

    /**
     * @param {{ canton: string }}
     * @returns {Promise<Array<object>>}    
    */
    listarParroquias({ canton }) {
        const apiUrl = `${URLAPIGENERAL}/parroquias/buscarporparroquia?canton=${canton}`;
        return axios.get(apiUrl).then(res => res.data);
    }

}

export const locacionesServices = new LocacionesServices();
