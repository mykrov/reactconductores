import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Grid, Modal, Fade, Button } from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import MensajesGenericos from './mensajesgenerico';

const stylemodal = {
  borderRadius: '1rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '90%', md: '90%', lg: '45%' },
  height: 'auto',
  padding: '50px',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

ModalGenericodelete.propTypes = {
  modulo: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  codigo: PropTypes.string.isRequired,
  openModaldelete: PropTypes.bool.isRequired,
  parentCallbackdelete: PropTypes.func.isRequired,
  toggleShowdelete: PropTypes.func.isRequired,
  mensaje: PropTypes.func.isRequired,
  urldelelte: PropTypes.string.isRequired,
  urlredirect: PropTypes.string.isRequired,
  datos: PropTypes.object.isRequired,
};

export default function ModalGenericodelete(props) {
  const [openModal, setopenModal] = useState(false);
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');
  const [tipo, setTipo] = useState('succes');
  const [Eliminado, setEliminado] = useState(false);
  const [codigomod, setCodigomod] = useState('');
  const [modoMantenimiento, setModoMantenimiento] = useState('');
  const [mantenimmiento, setMantenimmiento] = useState(false);
  const { openModaldelete, toggleShowdelete, urldelelte, datos, urlredirect } = props;
  const messajeTool = (variant, msg) => {
    const unTrue = true;
    setCodigomod('');
    setNombre('');
    setModoMantenimiento('grabar');
    setTexto(msg);
    setTipo(variant);
    setMantenimmiento(false);
    setopenModal(unTrue);
  };
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [Eliminar, setAceptareliminacion] = useState(true);

  const onTrigger = (event) => {
    const motivotrue = emiMotivo.length;
    if (motivotrue === 0) {
      messajeTool('error', 'Debe colocar un motivo.');
      setError(true);
      return false;
    }
    if (motivotrue < 5) {
      setopenModal(true);
      messajeTool('error', 'El Motivo debe tener al menos 5 caracteres.');
      setError(true);
      return false;
    }
    if (motivotrue >= 5) {
      props.parentCallbackdelete(event);
    }

    if (Eliminar === true) {
      const GrabarAudinv = async () => {
        try {
          // console.log(datos)
          await axios.post(urldelelte, datos);
          setEliminado(true);
          messajeTool('succes', 'Registro eliminado con exito');
        } catch (error) {
          messajeTool('error', 'Error al Eliminar del servidor');
        }
      };
      GrabarAudinv();
      setMotivo('');
    }

    return true;
  };

  const [emiMotivo, setMotivo] = useState('');
  const textmotivo = (e) => {
    props.mensaje(e.target.value.toUpperCase());
    setMotivo(e.target.value.toUpperCase());
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openModaldelet, setOpenModaldelet1] = useState();

  const disparadorcancelar = () => {
    setMotivo('');
    setOpenModaldelet1(toggleShowdelete);
  };

  const cerrarModalMensaje = () => {
    if (Eliminado === true) {
      setEliminado(false);
      setopenModal((p) => !p);
      navigate(urlredirect);
    } else {
      setopenModal((p) => !p);
    }
  };

  return (
    <>
      <MensajesGenericos
        openModal={openModal}
        closeModal={cerrarModalMensaje}
        mantenimmiento={mantenimmiento}
        codigo={codigomod}
        nombre={nombre}
        modomantenimiento={modoMantenimiento}
        texto={texto}
        tipo={tipo}
      />
      <Modal
        open={openModaldelete}
        onClose={openModaldelet}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={openModaldelete}>
          <Box sx={stylemodal}>
            <div style={{ margin: '1rem', fontWeight: 'bold' }}>
              <h2>Motivo de eliminación</h2>
              <h5 style={{ textAlign: 'right' }}>
                {props.modulo} - {props.codigo} - {props.nombre}
              </h5>
            </div>
            <Box ml={2} mr={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Motivo de Eliminación"
                    multiline
                    required
                    error={error}
                    fullWidth
                    rows={4}
                    onChange={(e) => textmotivo(e)}
                    value={emiMotivo}
                  />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Grid container spacing={2} justifyContent="center">
                    <Grid item md={5} sm={2} xs={6}>
                      <Button fullWidth variant="text" onClick={(e) => onTrigger(e)}>
                        Confirmar
                      </Button>
                    </Grid>
                    <Grid item md={5} sm={2} xs={6}>
                      <Button fullWidth variant="text" onClick={(e) => disparadorcancelar(e)}>
                        Cancelar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
