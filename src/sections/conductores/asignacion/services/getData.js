import axios from 'axios';
import { URLAPILOCAL, URLAPIGENERAL } from '../../../../config';

const sucursal = window.localStorage.getItem('sucursal');

export function getAsignaciones() {
    const url = `${URLAPILOCAL}/asignaciones`;
    return async () => {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            return error;
        }
    }
}

export function getConductores(){
    const url = `${URLAPILOCAL}/condutores`;
    return async () => {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            return error;
        }
    }
}

export function getVehiculos(){
    const url = `${URLAPILOCAL}/vehiculos`;
    return async () => {
        try {
            const response = await axios.get(url);
            return response;
        } catch (error) {
            return error;
        }
    }
}
