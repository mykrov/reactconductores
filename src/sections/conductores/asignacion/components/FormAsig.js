import React, { forwardRef, useEffect } from 'react';
import {
    TextField,
    Button,
    Grid,
    MenuItem,
    Card,
    Box,
    Typography
} from '@mui/material';
import axios from 'axios';
import { DataGrid, esES } from '@mui/x-data-grid';
import { useSnackbar } from 'notistack';
import { URLAPILOCAL } from '../../../../config';
import { getAsignaciones, getConductores, getVehiculos } from '../services/getData';


const FormAsig = forwardRef((props, _ref) => {

    const columnsHome = [
        { field: 'id', headerName: 'ID', width: 50, headerClassName: 'super-app-theme--header' },
        { field: 'conductor', headerName: 'Conductor', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'vehiculo', headerName: 'Vehiculo', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'modelo', headerName: 'Modelo', width: 150, headerClassName: 'super-app-theme--header' },
        { field: 'placa', headerName: 'Placa', width: 150, headerClassName: 'super-app-theme--header' },

    ];
    const { enqueueSnackbar } = useSnackbar();
    const messajeTool = (variant, msg) => {
        enqueueSnackbar(msg, { variant, anchorOrigin: { vertical: 'top', horizontal: 'center' } });
    };

    const unTrue = true;
    const [asignaciones, setAsignaciones] = React.useState([]);
    const [conductores, setConductores] = React.useState([]);
    const [vehiculos, setVehiculos] = React.useState([]);
    const [rowsData, setRowsData] = React.useState([]);

    const [formData, setFormData] = React.useState({
        vehiculo: 0,
        conductor: 0
    });

    const postAsignar = () => {
        if (formData.conductor !== 0 && formData.vehiculo !== 0) {
            const urlPost = `${URLAPILOCAL}/asignar`
            axios.post(urlPost, formData)
                .then(res => {
                    if (res.status === 201) {
                        const dataUpdate = getAsignaciones();
                        dataUpdate().then(res => {
                            const asignLite = res.data.map(el => ({
                                id: el.idasignacion,
                                conductor: `${el.conductor.nombre} ${el.conductor.apellido}`,
                                vehiculo: el.vehiculo.marca,
                                modelo: `${el.vehiculo.modelo} año:${el.vehiculo.year}`,
                                placa: el.vehiculo.placa
                            }));
                            setRowsData(asignLite);
                        });
                        messajeTool('success', 'Asignación exitosa.');
                    }
                })
                .catch(err => {
                    messajeTool('error', 'Inconvenientes con la Asignación.');
                });
        }
    }

    useEffect(() => {
        // Consulta Asignaciones    
        const dataAsignaciones = getAsignaciones();
        dataAsignaciones().then(res => {
            const asignLite = res.data.map(el => ({
                id: el.idasignacion,
                conductor: `${el.conductor.nombre} ${el.conductor.apellido}`,
                vehiculo: el.vehiculo.marca,
                modelo: `${el.vehiculo.modelo} año:${el.vehiculo.year}`,
                placa: el.vehiculo.placa
            }));
            setRowsData(asignLite);
            setAsignaciones(res.data);
        });

        // Consulta Conductores    
        const dataConductores = getConductores();
        dataConductores().then(res => {
            setConductores(res.data);
        })

        // Consulta Conductores 
        const dataVehiculos = getVehiculos();
        dataVehiculos().then(res => {
            setVehiculos(res.data);
        })

    }, []);
    // seteo del vehiculo por defecto el primero
    useEffect(() => {
        if (vehiculos.length > 0) {
            setFormData({ ...formData, vehiculo: vehiculos[0].idvehiculo })
        }
    }, [vehiculos]);

    // seteo del conductor por defecto el primero
    useEffect(() => {
        if (conductores.length > 0) {
            setFormData({ ...formData, conductor: conductores[0].id })
        }
    }, [conductores]);

    return (
        <>
            <Grid container spacing={2} marginTop={5}>
                {/* Parte izquiera Formulario */}
                <Grid item md={6} sm={12}>
                    <Card elevation={1} sx={{ p: 2 }}>
                        <Typography variant='h4' color="text.primary">
                            Lista de Asisgnaciones
                        </Typography>
                        <Grid container sm={12} spacing={1}>
                            <Box
                                sx={{
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: 'background.neutral',
                                        borderRadius: "0.5rem"
                                    },
                                    '& .super-app.negative': {
                                        fontWeight: 'bold',
                                    },

                                }}

                                style={{
                                    padding: '1rem',
                                    height: '50vh',
                                    width: '100%',
                                }}
                            >
                                <DataGrid
                                    rowHeight={28}
                                    localeText={esES.components.MuiDataGrid.defaultProps.localeText}
                                    sx={{
                                        '& .MuiDataGrid-cell': {
                                            border: 'none'
                                        },
                                        '& .MuiDataGrid-columnSeparator--sideRight': {
                                            display: 'none',
                                        },
                                        '.blueCell': {
                                            backgroundColor: 'grid.azul'
                                        },
                                        '.orangeCell': {
                                            backgroundColor: 'grid.rojo'
                                        },
                                        '.yellowCell': {
                                            backgroundColor: 'grid.amarillo'
                                        }
                                    }}
                                    density="compact"
                                    columns={columnsHome}
                                    rows={rowsData}
                                    getRowId={(rowHome) => rowHome.id}
                                />
                            </Box>
                        </Grid>

                    </Card>
                </Grid>
                <Grid item md={6} sm={12}>
                    <Card elevation={1} sx={{ p: 2 }}>
                        <Grid container spacing={1}>
                            <Grid item md={6} sm={12} xs={12}>
                                <TextField
                                    select
                                    label="Conductores"
                                    value={formData.conductor}
                                    fullWidth
                                    size="small"
                                    onChange={(e) => {
                                        setFormData({ ...formData, conductor: e.target.value })
                                    }}
                                >
                                    {
                                        conductores.map(con =>
                                            <MenuItem
                                                key={con.id}
                                                value={con.id}
                                            >
                                                {`${con.nombre} ${con.apellido}`}
                                            </MenuItem>)
                                    }
                                </TextField>
                            </Grid>
                            <Grid item md={6} sm={12} xs={12}>
                                <TextField
                                    select
                                    label="Vehiculos"
                                    value={formData.vehiculo}
                                    fullWidth
                                    size="small"
                                    onChange={(e) => {
                                        setFormData({ ...formData, vehiculo: e.target.value })
                                    }}
                                >
                                    {
                                        vehiculos.map(veh =>
                                            <MenuItem
                                                key={veh.idvehiculo}
                                                value={veh.idvehiculo}
                                            >
                                                {`${veh.marca} ${veh.modelo} ${veh.placa}`}
                                            </MenuItem>)
                                    }
                                </TextField>
                            </Grid>
                            <Grid item md={6} sm={6} xs={6}>
                                <Button
                                    fullWidth
                                    onClick={() => postAsignar()}
                                    variant='contained'
                                >
                                    Asignar
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </>
    )

})

export default React.memo(FormAsig);