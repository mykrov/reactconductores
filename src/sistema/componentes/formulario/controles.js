import { TextField } from "@mui/material";
import { useState, useEffect, memo } from "react";
import PropTypes from 'prop-types';
import { esCorreo } from "../../funciones/funciones";

FormCorreo.prototype = {
    correo: PropTypes.string.isRequired,
    setcorreo: PropTypes.func.isRequired,
    nuevo: PropTypes.bool,
}

function FormCorreo(prop) {
    const { correo, setcorreo, nuevo } = prop;
    const [inp, setInp] = useState(correo);
    const [error, setError] = useState(false);
    
    const setValue = (e) => {
        setcorreo(e)
    }
    // console.log(!nuevo)
    useEffect(()=>{
        if (nuevo) {
            console.log("limpia")
        }
    },[nuevo])
   
    return (
        <TextField
            error={error}
            fullWidth
            size="small"
            variant="outlined"
            label="Correo*"
            helperText={error ? "correo invalido: example@example.com" : ''}
            value={inp}
            onChange={(e) => {
                const input = e.target.value;
                if (!esCorreo(input)) setError(true);
                else setError(false);
                setInp(input);
                setValue(input)
            }}
        />
        
    )
}

export default memo(FormCorreo)