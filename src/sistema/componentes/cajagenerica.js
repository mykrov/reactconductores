import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { TextField, Grid, IconButton, InputAdornment } from '@mui/material';
import SearchRounded from '@mui/icons-material/SearchRounded';
import { useSnackbar } from 'notistack';
// import CircularProgreso from "./circuloprogreso";
import ModalGenerico from "./modalgenerico";

CajaGenerica.propTypes = {
    codigoalternativo: PropTypes.bool,
    modooffline: PropTypes.bool,
    urlbusquedaoff: PropTypes.string,
    nombremodal: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    disparador: PropTypes.func.isRequired,
    estadoinicial: PropTypes.object.isRequired,
    descativarbusqueda: PropTypes.bool,
    desactivar: PropTypes.bool,
    opcionbusqueda: PropTypes.string

}

function CajaGenerica(props) {
    const { nombremodal, url, disparador, estadoinicial, descativarbusqueda, desactivar, modooffline, urlbusquedaoff, codigoalternativo, opcionbusqueda } = props;
    // eslint-disable-next-line no-unused-vars
    // console.log("mira desde caja generica",modooffline)
    const [mostrarprogreso, setMostrarProgreso] = React.useState(false);
    const { token } = JSON.parse(window.localStorage.getItem("session"));
    const [formulario, setFormulario] = React.useState(estadoinicial)
    const { enqueueSnackbar } = useSnackbar();
    // eslint-disable-next-line no-unused-vars
    const [tiposBusquedas, setTiposBusqueda] = React.useState([{ tipo: 'nombre' }, { tipo: 'codigo' }]);
    const [openModal, setOpenModal] = React.useState(false);
    const toggleShow = () => setOpenModal(p => !p);
    const handleCallbackChild = (e) => {
        const item = e.row;
        setFormulario({
            // codigo_especial: item.codigo_especial,
            codigo: item.codigo_especial,
            nombre: item.nombre
        })
        disparador(e.row);
        toggleShow();
    }
    const mensajeSistema = (mensaje, variante) => {
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
    const [listar, setListar] = React.useState([]);

    React.useEffect(() => {
        const obtener = async () => {
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            try {
                if (String(nombremodal).toLocaleLowerCase() === 'cliente') {
                    const { data } = await axios(`${url}`, {
                        headers
                    }, setMostrarProgreso(true))
                    const cliente = data.map(c => ({
                        codigo_especial: c.codigo_Cliente,
                        codigo: c.codigo,
                        nombre: c.razon_Social
                    }))
                    setListar(cliente);
                }
                else if (String(nombremodal).toLocaleLowerCase() === 'producto') {
                    const { data } = await axios(`${url}`, {
                        headers
                    }, setMostrarProgreso(true))
                    const producto = data.map(c => ({
                        codigo_especial: c.codigo_Producto,
                        codigo: c.codigo,
                        nombre: c.nombre
                    }))
                    setListar(producto);
                }
                // eslint-disable-next-line no-dupe-else-if
                else if (String(nombremodal).toLocaleLowerCase() === 'cuenta contable') {
                    const { data } = await axios(`${url}`, setMostrarProgreso(true));
                    const filtrado = data.filter(f => f.auxiliar === true)
                    const cuenta = filtrado.map(c => ({
                        codigo: c.cuenta,
                        nombre: c.nombre
                    }))
                    setListar(cuenta);
                }
                else if (String(nombremodal).toLocaleLowerCase() === 'codigo retencion') {
                    const { data } = await axios(`${url}`, setMostrarProgreso(true));
                    const cuenta = data.map(c => ({
                        codigo: c.cuenta,
                        nombre: c.concepto
                    }))
                    console.log('q vino aqui', cuenta);
                    setListar(cuenta);
                }
                // eslint-disable-next-line no-dupe-else-if
                else if (String(nombremodal).toLocaleLowerCase() === 'pago') {
                    const { data } = await axios(`${url}`, setMostrarProgreso(true));
                    const filtrado = data.filter(f => f.codigo !== 'TCR')
                    const cuenta = filtrado.map(c => ({
                        codigo: c.codigo,
                        nombre: c.nombre
                    }))
                    setListar(cuenta);
                }
                else {
                    const { data } = await axios(`${url}`, {
                        headers
                    }, setMostrarProgreso(true))
                    setListar(data);
                }
                setFormulario(estadoinicial)

            } catch {
                setFormulario(estadoinicial)
                setListar([]);
                // mensajeSistema("Problemas con la Conexion al servidor", "error");
            } finally {
                setMostrarProgreso(false);
            }
        }
        obtener();
        // tenia estadoinicial,url
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, estadoinicial])
    return (
        <>
            {/* <CircularProgreso open={mostrarprogreso} handleClose1={() => { setMostrarProgreso(false) }} /> */}
            {/* MODAL DE PROVINCIA */}
            <ModalGenerico
                opcionbusqueda={opcionbusqueda}
                codigoalternativo={codigoalternativo}
                modooffline={modooffline}
                nombre={nombremodal}
                openModal={openModal}
                busquedaTipo={tiposBusquedas}
                toggleShow={toggleShow}
                rowsData={listar}
                urlbusquedaoff={urlbusquedaoff}
                parentCallback={handleCallbackChild}
            />
            <Grid container item xs={12} spacing={1}>
                <Grid item md={4} sm={4} xs={12}>
                    <TextField
                        disabled={desactivar}
                        label={nombremodal}
                        fullWidth
                        size="small"
                        value={formulario.codigo}
                        onChange={(e) => {
                            setFormulario({
                                ...formulario,
                                codigo: e.target.value
                            })
                        }}
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position="end">
                                    {
                                        !descativarbusqueda ?
                                            <IconButton size="small" onClick={() => { setOpenModal(true) }}>
                                                <SearchRounded />
                                            </IconButton> : ''
                                    }
                                </InputAdornment>
                            )
                        }}
                    />
                </Grid>
                <Grid item md={8} sm={8} xs={12}>
                    <TextField
                        disabled={desactivar}
                        sx={{
                            backgroundColor: "#e5e8eb",
                            border: "none",
                            borderRadius: '10px',
                            color: "#212B36"
                        }}
                        label="Nombre"
                        fullWidth size="small"
                        value={formulario.nombre}
                        onChange={(e) => {
                            setFormulario({
                                ...formulario,
                                nombre: e.target.value
                            })
                        }}
                        InputProps={{
                            readOnly: true
                        }}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default React.memo(CajaGenerica);
