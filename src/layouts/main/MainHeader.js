// import { useLocation, useNavigate } from 'react-router-dom';
import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container, Modal, Backdrop, Fade, Grid, TextField } from '@mui/material';
import emailjs from 'emailjs-com';
import { useSnackbar } from 'notistack';
// import { PATH_AUTH } from '../../routes/paths';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// import useResponsive from '../../hooks/useResponsive';
// utils
import cssStyles from '../../utils/cssStyles';
// config
import { HEADER } from '../../config';
// components
// import Logo from '../../components/Logo';
import AdmLogo from  '../../components/admlogo'
import Label from '../../components/Label';

//
// import MenuDesktop from './MenuDesktop';
// import MenuMobile from './MenuMobile';
// import navConfig from './MenuConfig';

// ----------------------------------------------------------------------

const stylemodal = {
  borderRadius: '1rem',
  position: 'absolute',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '90%', md: '35%', lg: '35%' },
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
};


const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('md')]: {
    height: HEADER.MAIN_DESKTOP_HEIGHT,
  },
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8,
}));

// ----------------------------------------------------------------------

export default function MainHeader() {
  const isOffset = useOffSetTop(HEADER.MAIN_DESKTOP_HEIGHT);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  // MENSAJE GENERICO
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
  // const { pathname } = useLocation();

  // const isDesktop = useResponsive('up', 'md');

  // const isHome = pathname === '/';
  const [error, setError] = React.useState(false);
  const [formulario, setFormulario] = React.useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError(false);
  };
  const mensaje = (e) => {
    e.preventDefault();
    
   
  }
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
            <form onSubmit={mensaje}>
              <Box m={3}>
                <Grid container xs={12} spacing={1}>
                  <Grid container item xs={12} justifyContent="space-between" spacing={1}>
                    <Grid item xs={7}>
                      <h3>Envie sus datos</h3>
                    </Grid>
                    <Grid item xs={-0.1}>
                      <Button style={{ border: 0 }} variant="outlined" onClick={() => handleClose()}>
                        X
                      </Button>
                    </Grid>
                  </Grid>
                  {/* <Grid item xs={12}>
                    <h2>Envie sus datos</h2>
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField fullWidth size="small" type="text" label="Nombre" name="nombre" variant="outlined"
                      error={error}
                      onChange={(e) => {
                        setFormulario({
                          ...formulario,
                          nombre: e.target.value
                        })
                      }}
                      value={formulario.nombre}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth size="small" type="email" label="Correo" name="correo" variant="outlined"
                      error={error}
                      onChange={(e) => {
                        setFormulario({
                          ...formulario,
                          correo: e.target.value
                        })
                      }}
                      value={formulario.correo}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth size="small" type="text" label="Asunto" name="asunto" variant="outlined"
                      error={error}
                      onChange={(e) => {
                        setFormulario({
                          ...formulario,
                          asunto: e.target.value
                        })
                      }}
                      value={formulario.asunto} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={error}
                      fullWidth
                      size="small"
                      type="text"
                      label="Mensaje"
                      name="mensaje"
                      variant="outlined"
                      multiline
                      rows={8}
                      onChange={(e) => {
                        setFormulario({
                          ...formulario,
                          mensaje: e.target.value
                        })
                      }}
                      value={formulario.mensaje}
                    />
                  </Grid>
                  <Grid item md={12} xs={12} sm={12}>
                    <Button fullWidth variant="contained" type="submit">
                      Enviar
                    </Button>
                  </Grid>
                </Grid>

              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>

      <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent' }}>
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              ...cssStyles(theme).bgBlur(),
              height: { md: HEADER.MAIN_DESKTOP_HEIGHT - 16 },
            }),
          }}
        >
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <AdmLogo />

            <Label color="info" sx={{ ml: 1 }}>
              V.1.0.0
            </Label>
            <Box sx={{ flexGrow: 1 }} />

            {/* {isDesktop && <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}

            {/* <Button
              variant="contained"
              onClick={() => { handleOpen() }}
            // target="_blank"
            // rel="noopener"
            // href="https://material-ui.com/store/items/minimal-dashboard/"
            >
              Cotizar
            </Button> */}

            {/* {!isDesktop && <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />} */}
          </Container>
        </ToolbarStyle>

        {isOffset && <ToolbarShadowStyle />}
      </AppBar>
    </>
  );
}
