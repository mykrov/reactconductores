import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { useSnackbar } from 'notistack';

// import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment, MenuItem, Typography, TextField, Modal, Box, Fade, Backdrop, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
// import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';
import axios from 'axios';
import { PATH_AUTH, PATH_DASHBOARD, PATH_SISTEMA } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';

import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import { URLAPIGENERAL, URLAPILOCAL } from '../../../config';


// ----------------------------------------------------------------------
const stylemodal = {
  borderRadius: '1rem',
  position: 'absolute',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '60%', md: '35%', lg: '35%' },
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
};
// eslint-disable-next-line react/prop-types
 function LoginForm() {
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
  const [formulario, setFormulario] = useState({
    usuario: '',
    password: ''
  })
  const [error, setError] = useState(false);
  const [sucursal, setSucursal] = useState(1);
  const [listarsucursal, setListarSucursal] = useState([]);
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navegacion = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const ubicacion = useNavigate();
  // const { rucempresa } = ruc;
  // console.log("hola desde form",ruc)
  const isMountedRef = useIsMountedRef();

  // const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    // setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("mira", data.email, data.password)
      await login(data.email, data.password);
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  const Auth = async () => {
    try {
      console.log(formulario);
      console.log('Session Clear');
      window.localStorage.removeItem('session');
      if (formulario.usuario.trim().length > 0 && formulario.password.trim().length > 0) {
        const { data } = await axios.post(`${URLAPILOCAL}/login/authenticate`, formulario);
        const jsondata = JSON.stringify(data);
        console.log('Session Set');
        window.localStorage.setItem('session', jsondata);
        // console.log(data);
        handleOpen()
        setError(false);
      } else {
        mensajeSistema('Complete los campos', 'error');
        setError(true);
      }

    } catch (error) {
      mensajeSistema('No tiene acceso al sistema', 'error');
      setError(false);
    }
  }
  const obtenerSucursal = () => {

    const datossucursal = listarsucursal.filter(m => m.codigo === sucursal)
    window.localStorage.setItem('sucursal', sucursal);
    window.localStorage.setItem('datossucursal', JSON.stringify(datossucursal[0]));
    navegacion(PATH_SISTEMA.inicio)
  }
  useEffect(() => {
    async function obtenerSucursales() {
      const { data } = await axios(`${URLAPILOCAL}/sucursales/listar`);
      const sucursalesactivas = data.filter(f => f.estado === true);
      setListarSucursal(sucursalesactivas);

    }
    obtenerSucursales();
  }, [])
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={stylemodal}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <Box m={3}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant='h4'>
                    Ingresar Sucursal
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    select
                    label="Sucursal"
                    variant="outlined"
                    value={sucursal}
                    onChange={(e) => {
                      setSucursal(e.target.value)
                    }}
                  >
                    {
                      listarsucursal.map((s) => (
                        <MenuItem key={s.codigo} value={s.codigo}>{s.nombre}</MenuItem>
                      ))
                    }
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => { obtenerSucursal() }}
                  >
                    Acceder
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3}>
          {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

          {/* <RHFTextField name="email" label="Usuario" /> */}
          <TextField
            error={error}
            label="Usuario"
            fullWidth
            value={formulario.usuario}
            onChange={(e) => {
              setFormulario({
                ...formulario,
                usuario: e.target.value
              })
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonRoundedIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            error={error}
            label="contraseña"
            type="password"
            fullWidth
            value={formulario.password}
            onChange={(e) => {
              setFormulario({
                ...formulario,
                password: e.target.value
              })
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRoundedIcon />
                </InputAdornment>
              )
            }}
          />

          {/* <RHFTextField
          name="password"
          label="Contraseña"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        /> */}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          {/* <RHFCheckbox name="remember" label="Recuerdame" />
          <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.login}>
            Olvidaste tu contraseña?
          </Link> */}
        </Stack>

        {/* <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Acceder
      </LoadingButton> */}
        <LoadingButton fullWidth size="large" variant="contained" onClick={() => { Auth() }} loading={isSubmitting}>
          Acceder
        </LoadingButton>
      </FormProvider>
    </>
  );
}

export default LoginForm
