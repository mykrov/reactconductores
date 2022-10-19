// import { m } from 'framer-motion';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Box, Button, Container, Typography, Grid } from '@mui/material';
// // components
// import Image from '../../components/Image';
// import Iconify from '../../components/Iconify';
// import { MotionViewport, varFade } from '../../components/animate';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(10, 0),
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(15, 0),
//   },
// }));

// // ----------------------------------------------------------------------

// export default function HomeLookingFor() {
//   return (
//     <RootStyle>
//       <Container component={MotionViewport}>
//         <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
//           <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
//             <m.div variants={varFade().inDown}>
//               <Typography variant="overline" component="div" sx={{ color: 'text.disabled' }}>
//                 Looking For a
//               </Typography>
//             </m.div>

//             <m.div variants={varFade().inDown}>
//               <Typography variant="h2" sx={{ mt: 2, mb: 5 }}>
//                 Landing Page Template?
//               </Typography>
//             </m.div>

//             <m.div variants={varFade().inDown}>
//               <Button
//                 color="inherit"
//                 size="large"
//                 variant="outlined"
//                 target="_blank"
//                 rel="noopener"
//                 href="https://material-ui.com/store/items/zone-landing-page/"
//                 endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
//               >
//                 Visit Zone Landing
//               </Button>
//             </m.div>
//           </Grid>

//           <Grid item xs={12} md={7}>
//             <Box
//               component={m.div}
//               variants={varFade().inUp}
//               sx={{
//                 mb: { xs: 3, md: 0 },
//               }}
//             >
//               <Image
//                 disabledEffect
//                 alt="rocket"
//                 src="https://minimal-assets-api.vercel.app/assets/images/home/zone_screen.png"
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </RootStyle>
//   );
// }
// import { m } from 'framer-motion';
// @mui
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import { Container, Typography, Grid } from '@mui/material';
// components
// import Image from '../../components/Image';
// import Iconify from '../../components/Iconify';
import { MotionViewport } from '../../components/animate';
// import jose from '../../../assets/imagen/jose.jpg';
// import cristina from '../../assets/imagen/cristina.jpg';
// import gabriel from '../../assets/imagen/gabriel.jpg';
import jose from '../../assets/imagenes/inicio/comentarios/jose.jpg';
import cristina from '../../assets/imagenes/inicio/comentarios/cristina.jpg';
import gabriel from '../../assets/imagenes/inicio/comentarios/gabriel.jpg';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Typography gutterBottom variant="h2" component="div">
          Comentarios
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 5 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" image={jose} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ing. Jose Franco (FREDVY-GUAYAQUIL)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Llevo 10 años usando el sistema ADM, el sistema ha sido la base para el crecimiento sostenido que
                  tenemos en el mercado.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" image={cristina} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ing. Cristina Maldonado (MYM - AMBATO)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lo mejor de ADM es su servicio tecnológico, que me permite obviar el departamento de sistemas y
                  concentrarnos en las ventas, ya llevo 5 años con ADM y no hemos pensado en cambiarlo.Lo mejor de ADM
                  es su servicio tecnológico, que me permite obviar el departamento de sistemas y concentrarnos en las
                  ventas, ya llevo 5 años con ADM y no hemos pensado en cambiarlo.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" height="200" image={gabriel} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ing. Gabriel Martínez (GAMA-QUITO)
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ADM es el sistema ideal para mi tipo de negocio, pero lo mejor es el servicio tecnológico que me
                  permite concentrarme en las ventas.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}