// import { capitalCase } from 'change-case';
import * as React from 'react';
// import { Link as RouterLink, useParams } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Container, Typography } from '@mui/material';
// axios
import axios from 'axios';
// import { useSnackbar } from 'notistack';
// routes
// import Logo from '../../components/Logo';

import Logo1 from '../../components/Logo1';
import { PATH_AUTH } from '../../routes/paths';
// hooks
// import useAuth from '../../hooks/useAuth';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
// import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import LoginForm from '../../sections/auth/login/LoginForm';
// configuraciones

// import { Logo1 } from 'src/components/Logo';
// imagenes
import imagenlogo from '../../assets/imagenes/publicidad-login.png';
import { URLEMRPRESA } from '../../config';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

function Login() {
  // const { method } = useAuth();
  // const { enqueueSnackbar } = useSnackbar();
  const smUp = useResponsive('up', 'sm');

  const mdUp = useResponsive('up', 'md');

  // paramatro
  const [nombreempresa, setNombreEmpresa] = React.useState('');
  const RUC = window.localStorage.getItem('ruc');
  // console.log("mira",ruc,nombreempresa);
  React.useEffect(() => {
    async function obtenerEmpresa() {
      const response = await axios(URLEMRPRESA);
      const rucobtenido = response.data.filter((e) => e.RUC === RUC);
      setNombreEmpresa(rucobtenido[0].nombre);
      console.log(RUC);
    }
    obtenerEmpresa();
  }, [RUC]);
  return (
    <Page title="Acceso">
      <RootStyle>
        <HeaderStyle>
          {/* logo */}
          <Logo1 />
          {/* {smUp && (
            <Typography variant="body2" sx={{ mt: { md: -2 } }}>
              No tienes cuenta en ADM Enterprise? {''}
              <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                Comienza Ahora!
              </Link>
            </Typography>
          )} */}
        </HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h4" sx={{ px: 5, mt: 10, mb: 5 }}>
              {/* Hola, {nombreempresa} te da la Bienvenida */}
              HOLA, {nombreempresa} TE DA LA BIENVENIDA
            </Typography>
            <Image visibleByDefault disabledEffect alt="login" src={imagenlogo} />
          </SectionStyle>
        )}

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Inicio de Sesion
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Ingrese sus datos a continuación.</Typography>
              </Box>

              {/* <Tooltip title={capitalCase(method)} placement="right">
                <>
                  <Image
                    disabledEffect
                    src={`https://minimal-assets-api.vercel.app/assets/icons/auth/ic_${method}.png`}
                    sx={{ width: 32, height: 32 }}
                  />
                </>
              </Tooltip> */}
            </Stack>

            <Alert severity="info" sx={{ mb: 3 }}>
              {/* Use email : <strong>demo@minimals.cc</strong> / password :<strong> demo1234</strong> */}
              <strong> AFRODITA WEB </strong> ( un ERP Comercial ) es propiedad Intelectual de
              <strong> BiroBID S.A. </strong> Cualquier copia parcial o total es penado por las leyes que rigen los
              derechos Intelectuales
            </Alert>

            <LoginForm /* ruc={id} */ />

            {/* {!smUp && (
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                No tienes cuenta en ADM Enterprice?{' '}
                <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.login}>
                Comienza Ahora!
                </Link>
              </Typography>
            )} */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}

export default Login;
