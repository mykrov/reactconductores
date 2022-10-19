import { useState } from 'react';
import { TextField, Grid, Modal, Fade, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import CircularProgreso from './circuloprogreso';
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

ModalGenericoDelete.propTypes = {
  modulo: PropTypes.string.isRequired, // ATRAE EL MODULO ESCRITO
  nombre: PropTypes.string.isRequired, // ATRAE EL PARAMETRO DEL CODIGO A ELIMINAR
  codigo: PropTypes.string.isRequired, // ATRAE EL PARAMETRO DEL NOMBRE DEL CODIGO A ELIMINAR
  openModal: PropTypes.bool.isRequired, // OPNE/CLOSE MODAL
  parentCallback: PropTypes.func.isRequired, // REALIZA LA FUNCION DE LLEVAR EL EVENTO AL PADRE
  mensaje: PropTypes.func.isRequired, // ENVIA EL MOTIVO POR ESCRITO EN EL MODAL HACIA EL PADRE
  urldelelte: PropTypes.string.isRequired, // TRAE LA URL DE SU API
  urlredirect: PropTypes.string, // URL REDIRECCION
  datos: PropTypes.object.isRequired, // TRAE EL OBJETO PARAMETRIZADO A ELIMINAR
};

export default function ModalGenericoDelete(props) {
  const [openModal2, setopenModal2] = useState(false);
  const [nombre, setNombre] = useState('');
  const [texto, setTexto] = useState('');
  const [tipo, setTipo] = useState('succes');
  const [Eliminado, setEliminado] = useState(false);
  const [codigomod, setCodigomod] = useState('');
  const [modoMantenimiento, setModoMantenimiento] = useState('');
  const [mantenimmiento, setMantenimmiento] = useState(false);
  const { openModal, toggleShow, urldelelte, datos, urlredirect } = props;
  const messajeTool = (variant, msg) => {
    const unTrue = true;
    setCodigomod('');
    setNombre('');
    setModoMantenimiento('grabar');
    setTexto(msg);
    setTipo(variant);
    setMantenimmiento(false);
    setopenModal2(unTrue);
  };
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [Eliminar, setAceptareliminacion] = useState(true);
  const [mostrarprogreso, setMostrarProgreso] = useState(false);

  const onTrigger = (event) => {
    const motivotrue = emiMotivo.length;
    if (motivotrue === 0) {
      messajeTool('error', 'Debe colocar un motivo.');
      setError(true);
      return false;
    }
    if (motivotrue < 5) {
      setopenModal2(true);
      messajeTool('error', 'El Motivo debe tener al menos 5 caracteres.');
      setError(true);
      return false;
    }
    if (motivotrue >= 5) {
      props.parentCallback(event);
    }

    if (Eliminar === true) {
      const GrabarAudinv = async () => {
        try {
          await axios.post(`${urldelelte}`, datos, setMostrarProgreso(true));
          setEliminado(true);
          messajeTool('succes', 'Registro eliminado con exito');
        } catch (error) {
          messajeTool('error', 'Error al Eliminar del servidor');
        }
      };
      GrabarAudinv();
    }

    return true;
  };

  //    Aqui llevamos el motivo escrito en el modal hacia al padre

  const [emiMotivo, setMotivo] = useState('');
  const textmotivo = (e) => {
    props.mensaje(e.target.value.toUpperCase());
    setMotivo(e.target.value.toUpperCase());
  };

  const cerrarModalMensaje = () => {
    if (Eliminado === true) {
      setopenModal2((p) => !p);
      setEliminado(false);
      navigate(`${urlredirect}`);
    } else {
      setopenModal2((p) => !p);
    }
  };

  return (
    <>
      <MensajesGenericos
        openModal={openModal2}
        closeModal={cerrarModalMensaje}
        mantenimmiento={mantenimmiento}
        codigo={codigomod}
        nombre={nombre}
        modomantenimiento={modoMantenimiento}
        texto={texto}
        tipo={tipo}
      />
      <CircularProgreso
        open={mostrarprogreso}
        handleClose1={() => {
          setMostrarProgreso(false);
        }}
      />
      <Modal
        open={openModal}
        onClose={toggleShow}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={openModal}>
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
                    // autoFocus
                    required
                    error={error}
                    fullWidth
                    rows={4}
                    onChange={(e) => textmotivo(e)} // funcion que guarda el motivo escrito en el modal y lo lleva al padre
                    value={emiMotivo}
                    // placeholder="Motivo de Eliminación"
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
                      <Button fullWidth variant="text" onClick={toggleShow}>
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
