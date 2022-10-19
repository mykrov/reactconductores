import { m } from 'framer-motion';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Button, Box, Stack, Container, Modal, Backdrop, Fade, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { PATH_AUTH } from '../../routes/paths';
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';
// import admgo from '../../assets/imagenes/inicio/admgo.png';
// import admgold from '../../assets/imagenes/inicio/admgold.png';
// import admplatinium from '../../assets/imagenes/inicio/admplatinium.png';
// import apolo from '../../assets/imagenes/inicio/apolo.png';
// import diana from '../../assets/imagenes/inicio/diana.png';
import logoinicial from '../../assets/imagenes/inicio/logoinicial.png';
import { URLEMRPRESA } from '../../config';
// import { MensajeSistema } from '../../sistema/componentes/mensajes';

// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[100],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

const stylemodal = {
  borderRadius: '1rem',
  position: 'absolute',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '90%', md: '25%', lg: '25%' },
  height: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
};
// ----------------------------------------------------------------------

export default function HomeHero() {
  const navegacion = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log(PATH_AUTH.login)
  const [data, setData] = React.useState({
    ruc: '',
  });
  async function obtenerRuc() {
    if (data.ruc.trim().length > 0) {
      const response = await axios(URLEMRPRESA);
      const rucobtenido = response.data.filter((e) => e.RUC === data.ruc && e.afrodita === 'S');
      console.log(rucobtenido)
      if (rucobtenido.length > 0) {
        window.localStorage.setItem('ruc', data.ruc);
        // console.log("mira esto",rucobtenido)
        window.localStorage.setItem('empresa', JSON.stringify(rucobtenido[0]));
        navegacion(`${PATH_AUTH.login}`);
      } else {
        enqueueSnackbar('Verifique que su ruc ingresado sea el correcto o si esta autorizado', {
          variant: 'error',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        });
      }
    } else {
      enqueueSnackbar('Complete el campo', {
        variant: 'error',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
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
            <Box m={3}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h4">Ingresar Ruc</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    type="text"
                    label="Ruc"
                    name="buscar"
                    variant="outlined"
                    value={data.ruc}
                    onChange={(e) => {
                      setData({
                        ruc: e.target.value,
                      });
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => {
                      obtenerRuc();
                    }}
                  >
                    Verificar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <MotionContainer>
        <RootStyle>
          <HeroImgStyle alt="hero" src={logoinicial} variants={varFade().inUp} />
          <Container>
            <ContentStyle>
              <m.div variants={varFade().inRight}>
                <Typography variant="h1" sx={{ color: 'common.black' }}>
                  AFRODITA
                  <br />
                  <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                    WEB
                  </Typography>
                </Typography>
              </m.div>

              <m.div variants={varFade().inRight}>
                <Typography sx={{ color: 'common.black' }}>
                  Es un ERP desarrollado por la empresa BIROBID S.A. con tecnología de punta y aplicando las seguridades
                  que la tecnología WEB lo exige, AFRODITA WEB es un producto que atendie a las empresas comerciales de
                  diferente tipo y tamaño.
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    handleOpen();
                  }}
                  // component={RouterLink}
                  // to={PATH_DASHBOARD.root}
                  startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
                >
                  Acceder
                </Button>
              </m.div>

              {/* <Stack spacing={2.5}>
                <m.div variants={varFade().inRight}>
                  <Typography variant="overline" sx={{ color: 'primary.dark' }} id="referencia">
                    OTROS PRODUCTOS
                  </Typography>
                </m.div>

                <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                  {[admplatinium, admgold, diana, apolo, admgo].map((resource) => (
                    <m.img
                      // ref={referencia}
                      key={resource}
                      style={{ width: '40px' }}
                      variants={varFade().inRight}
                      src={resource}
                    />
                  ))}
                </Stack>
              </Stack> */}
            </ContentStyle>
          </Container>
        </RootStyle>
        <Box sx={{ height: { md: '100vh' } }} />
      </MotionContainer>
    </>
  );
}
