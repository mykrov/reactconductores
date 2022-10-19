import { useState, useEffect } from 'react';
import { TextField, Grid, Modal, Fade, MenuItem } from '@mui/material';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, esES } from '@mui/x-data-grid';
import PropTypes from 'prop-types';
// import { debounce } from "lodash";
// import { URLAPIGENERAL, URLAPILOCAL } from '../../config';

const stylemodal = {
  borderRadius: '1rem',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '90%', md: '90%', lg: '45%' },
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
};

ModalGenerico.propTypes = {
  modooffline: PropTypes.bool,
  codigoalternativo: PropTypes.bool,
  nombre: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  parentCallback: PropTypes.func.isRequired,
  urlbusquedaoff: PropTypes.string,
  opcionbusqueda: PropTypes.string,
};

export default function ModalGenerico(props) {
  // eslint-disable-next-line react/prop-types
  const { openModal, toggleShow, rowsData, codigoalternativo, modooffline, urlbusquedaoff, opcionbusqueda } = props;
  // validacion especial
  // console.log("mira esto de aca",codigoalternativo)
  const nombrecodigo = codigoalternativo ? 'codigo_especial' : 'codigo';

  const [rowsFilter, setRowFilter] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [columns, setColums] = useState([
    {
      field: nombrecodigo,
      headerName: 'Codigo',
      width: 150,
      headerClassName: 'super-app-theme--header',
    },
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 250,
      headerClassName: 'super-app-theme--header',
    },
  ]);

  const [searchBy, setSearBy] = useState('nombre');
  const [buscar, setBuscar] = useState('');

  const filterTable = (text) => {
    //   console.log(text);
    const dataOrigin = rowsData;
    const result = dataOrigin.filter(
      (e) => String(e.nombre).toLocaleUpperCase().includes(text) || String(e.codigo).includes(text)
    );
    setRowFilter(result);
  };

  const Buscar = async (e) => {
    setBuscar(e.target.value.toUpperCase());
    // console.log("mira",modooffline)
    if (!modooffline) {
      filterTable(e.target.value.toUpperCase());
    } else if (e.target.value.trim().length >= 4) {
      let listabuscada = [];
      console.log('llega la url?', urlbusquedaoff, e.target.value);
      const { data } = await axios.get(`${urlbusquedaoff}${e.target.value}`);
      // console.log(`${urlbusquedaoff}${e.target.value}`)
      // console.log(data);
      // proveedor
      if (opcionbusqueda === 'proveedor') {
        listabuscada = data.map((m) => ({ codigo: m.codigo, codigo_especial: m.codigo_Proveedor, nombre: m.nombre }));
      }
      // productos
      if (opcionbusqueda === 'producto') {
        listabuscada = data.map((m) => ({ codigo: m.codigo, codigo_especial: m.codigo_Producto, nombre: m.nombre }));
      }
      // clientes
      if (opcionbusqueda === 'cliente') {
        listabuscada = data.map((m) => ({
          codigo: m.codigo,
          codigo_especial: m.codigo_Cliente,
          nombre: m.razon_Social,
        }));
      }
      // cuentas
      if (opcionbusqueda === 'cuentas') {
        listabuscada = [{ codigo: data.cuenta, nombre: data.nombre }];
      }
      // const clientemap = data.map(m => ({ codigo: m.codigo, codigo_especial: m.codigo_Cliente, nombre: m.razon_Social }))
      // console.log(clientemap)
      setRowFilter(listabuscada);
    } else {
      setRowFilter(rowsData);
    }
  };

  const onTrigger = (event) => {
    props.parentCallback(event);
  };

  useEffect(() => {
    setRowFilter(rowsData);
    setBuscar('');
  }, [rowsData]);

  return (
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
            <h2>Selección de {props.nombre} </h2>
          </div>
          <Box ml={2} mr={2}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={12} sm={3} xl={3} lg={3} md={3}>
                <TextField select size="small" fullWidth label="Buscar por" variant="outlined" value={searchBy}>
                  {
                    // eslint-disable-next-line react/prop-types
                    Object.values(props.busquedaTipo).map((val) => (
                      <MenuItem onClick={() => setSearBy(val.tipo)} key={val.tipo} value={val.tipo}>
                        {val.tipo}
                      </MenuItem>
                    ))
                  }
                </TextField>
              </Grid>
              <Grid item xl={9} lg={9} md={9} sm={9} xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  type="text"
                  autoFocus
                  label="Buscar"
                  name="buscar"
                  variant="outlined"
                  onChange={(e) => Buscar(e)}
                  value={buscar}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              '& .columnclass': {
                // fontSize: '1.1rem',
                width: '100%',
                // fontFamily: 'Franklin Gothic '
              },
              '& .MuiDataGrid-columnHeaders': {
                // backgroundColor: '#EFEFEF',
                borderRadius: '0.5rem',
              },
              '& .super-app-theme--header': {
                // backgroundColor: 'primary.light',
              },
              '& .hot': {
                backgroundColor: '#ff943975',
                color: '#1a3e72',
              },
              '& .cold': {
                backgroundColor: '#b9d5ff91',
                color: '#1a3e72',
              },
            }}
          >
            <div
              style={{
                padding: '1rem',
                height: '55vh',
                width: '100%',
              }}
            >
              <DataGrid
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                density="compact"
                onRowDoubleClick={(e) => onTrigger(e)}
                columns={columns}
                rows={rowsFilter}
                getRowId={(rowsFilter) => rowsFilter.codigo}
              />
            </div>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
