/* eslint-disable class-methods-use-this */
import axios from "axios";
import { URLAPIGENERAL } from "../../config";

class CuentasContablesServices {
    /**
     * @returns {Promise<Array<object>>}    
    */
    listar() {
        const apiUrl = `${URLAPIGENERAL}/cuentascontables/listar`;
        return axios.get(apiUrl).then(res => res.data);
    }
}
const cuentasContablesServices = new CuentasContablesServices();
export default cuentasContablesServices;
