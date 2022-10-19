/* eslint-disable class-methods-use-this */
import axios from "axios";
import { URLAPIGENERAL } from "../../config";

class BancosServices {
    /**
     * @returns {Promise<Array<object>>}    
    */
    listar() {
        const apiUrl = `${URLAPIGENERAL}/bancos/listar`;
        return axios.get(apiUrl).then(res => res.data);
    }
}
const bancosServices = new BancosServices();
export default bancosServices;
 