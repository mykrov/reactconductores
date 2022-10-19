import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
// ***************** MENSAJES QUE SE EMPLEARAN EN EL SISTEMA ************

MensajeSistema.prototype = {
    mensaje: PropTypes.string.isRequired,
    variante: PropTypes.string.isRequired,
}

export const MensajeSistema = (props) => {
    const { mensaje, variante } = props
    const { enqueueSnackbar } = useSnackbar();
    enqueueSnackbar(mensaje,
        {
            variant: variante,
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'center',
            },
        }
    )
}

// MensajeSistema.defaultProps = {
//     variante: "success", // default - success - error - warning - info
//     mensaje: "Operacion realizada con exito"
// };