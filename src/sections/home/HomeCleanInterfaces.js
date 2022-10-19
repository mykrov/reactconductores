// import { m } from 'framer-motion';
// // @mui
// import { alpha, styled } from '@mui/material/styles';
// import { Box, Container, Typography, useTheme } from '@mui/material';
// // components
// import Image from '../../components/Image';
// import { MotionViewport, varFade } from '../../components/animate';

// // ----------------------------------------------------------------------
// // const imageneslenguajes = [
// //   'https://wallpapercave.com/dwp1x/wp1958169.png',
// //   'https://wallpapercave.com/dwp1x/wp2465901.jpg',
// //   'https://wallpapercave.com/wp/wp8591489.png',
// //   'https://wallpapercave.com/wp/wp9890993.png',
// //   'https://wallpaperaccess.com/full/4609592.jpg',
// //   'https://wallpapercave.com/wp/wp2465923.jpg',
// //   'https://wallpapercave.com/wp/wp3621281.jpg',
// //   'https://wallpapercave.com/wp/wp3621308.jpg',
// //   'https://wallpapercave.com/wp/wp6878753.jpg',
// //   ''
// // ]
// const IMG = [...Array(10)].map(
//   (_, index) => `https://minimal-assets-api.vercel.app/assets/images/home/clean-${index + 1}.png`
// );

// const RootStyle = styled('div')(({ theme }) => ({
//   paddingTop: theme.spacing(15),
//   paddingBottom: theme.spacing(10),
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   maxWidth: 520,
//   margin: 'auto',
//   textAlign: 'center',
//   [theme.breakpoints.up('md')]: {
//     zIndex: 11,
//     textAlign: 'left',
//     position: 'absolute',
//   },
// }));

// // ----------------------------------------------------------------------

// export default function HomeCleanInterfaces() {
//   const theme = useTheme();

//   const isLight = theme.palette.mode === 'light';

//   return (
//     <RootStyle>
//       <Container component={MotionViewport}>
//         <ContentStyle>
//           <m.div variants={varFade().inUp}>
//             <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
//               ADM ENTERPRISE
//             </Typography>
//           </m.div>

//           <m.div variants={varFade().inUp}>
//             <Typography
//               variant="h2"
//               paragraph
//               sx={{
//                 ...(!isLight && {
//                   textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
//                 }),
//               }}
//             >
//               Conocimientos de Desarrollo
//             </Typography>
//           </m.div>
//         </ContentStyle>

//         <Box sx={{ position: 'relative' }}>
//           {IMG.map((_, index) => (
//             <Box
//               key={index}
//               component={m.div}
//               variants={varFade().inUp}
//               sx={{
//                 top: 0,
//                 left: 0,
//                 position: 'absolute',
//                 ...(index === 0 && { zIndex: 8 }),
//                 ...(index === 9 && { position: 'relative', zIndex: 9 }),
//               }}
//             >
//               <Image
//                 disabledEffect
//                 visibleByDefault
//                 alt={`clean-${index + 1}`}
//                 src={`https://minimal-assets-api.vercel.app/assets/images/home/clean-${index + 1}.png`}
//               />
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </RootStyle>
//   );
// }
// import { m } from 'framer-motion';
// @mui
// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { styled } from '@mui/material/styles';
// import { Button, Container, Grid, IconButton } from '@mui/material';
// import { MotionViewport } from '../../components/animate';
// import fredy from '../../assets/imagenes/inicio/clientes/fredysa.png';
// import mm from '../../assets/imagenes/inicio/clientes/LogoMyM1.png';
// import cia from '../../assets/imagenes/inicio/clientes/ciavs.png';
// import gama from '../../assets/imagenes/inicio/clientes/gama.png';
// import guido from '../../assets/imagenes/inicio/clientes/guido.png';
// import ganga from '../../assets/imagenes/inicio/clientes/ganga.png';
// import diferencia from '../../assets/imagenes/inicio/clientes/diferencia.png';
// import electrodomestico from '../../assets/imagenes/inicio/clientes/electrodomestico.jpg';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(10, 0),
//   [theme.breakpoints.up('md')]: {
//     padding: theme.spacing(15, 0),
//   },
// }));

// // ----------------------------------------------------------------------
// const clientes = [
//   { titulo: 'FREDVY SA', imagen: fredy, sitioweb: 'https://fredvy.com/' },
//   { titulo: 'DISTRIBUIDORA M&M', imagen:mm, sitioweb: 'https://mymecuador.com/wp/' },
//   { titulo: 'JEFAMICORP', imagen:jefa, sitioweb: 'https://jefamicorp.com' },
//   { titulo: 'GUIDO ELECTRONIC', imagen:guido, sitioweb: 'https://www.guidoelectronic.com/' },
//   { titulo: 'GAMA', imagen:gama, sitioweb: 'https://mymecuador.com/wp/' },
//   { titulo: 'CIAVS CORP S.A', imagen:cia, sitioweb: 'https://ciavscorp.com/' },
//   { titulo: 'LA GANGA', imagen:ganga, sitioweb: 'https://www.grupolaganga.com/fe/' },
//   { titulo: 'LA DIFERENCIA', imagen:diferencia, sitioweb: 'https://ladiferencia.ec/' },
//   { titulo: 'MUNDO ELECTRODOMEST', imagen:electrodomestico, sitioweb: 'https://mundodeelectrodomesticos.com/' }
// ]


// export default function HomeLookingFor() {
//   return (
//     <RootStyle>
//       <Container component={MotionViewport}>
//         <h2>Sitios web de Clientes</h2>
//         <Grid container spacing={1} justifyContent="center" alignContent="center">
//           { clientes.map( (c) => 
//           <Grid key={c.titulo} item md={4} sm={6} xs={12} >
//             <Card>
//               <CardHeader
//                 title={c.titulo}
//               />
//               <CardMedia
//                 component="img"
//                 height="140px"
//                 image={c.imagen}
//               />
//               <CardContent>
//                 {/*  */}
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton>
//                   <Button size="small" href={c.sitioweb} target="_blank">
//                     Ir al sitio web
//                   </Button>
//                 </IconButton>
//               </CardActions>
//             </Card>
//           </Grid>)
//           }
//         </Grid>
//       </Container>
//     </RootStyle>
//   );
// }
import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Button } from '@mui/material';
import jefa from '../../assets/imagenes/inicio/clientes/logo_empresa.png';
import cia from '../../assets/imagenes/inicio/clientes/ciavs.png';
import gama from '../../assets/imagenes/inicio/clientes/GAMA1.png';
import guido from '../../assets/imagenes/inicio/clientes/guido2.png';
import medicam from '../../assets/imagenes/inicio/clientes/medicam.png';
import mym from '../../assets/imagenes/inicio/clientes/mym.jpg';
import diferencia from '../../assets/imagenes/inicio/clientes/diferencia.png';
import electrodomestico from '../../assets/imagenes/inicio/clientes/electrodomestico.jpg';
import cafe from '../../assets/imagenes/inicio/clientes/cafe.jpg';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'https://birobid.com/wp/wp-content/uploads/2019/05/client-11.png',
    title: 'Freddy',
    description:
      'https://fredvy.com/',
  },
  {
    icon: medicam,
    title: 'MEDICAM',
    description: 'https://medicam.ec/ws-medicamec/',
  },
  {
    icon: mym,
    title: 'DISTRIBUIDORA M&M',
    description: 'https://mymecuador.com/wp/',
  },
  {
    icon: jefa,
    title: 'JEFAMICORP S.A',
    description:
      'https://jefamicorp.com/',
  },
  {
    icon: guido,
    title: 'GUIDO ',
    description: 'https://www.guidoelectronic.com/',
  },
  {
    icon: cia,
    title: 'CIAVS CORP S.A',
    description:
      'https://ciavscorp.com/',
  },
  {
    icon: diferencia,
    title: 'ALMACENES LA DIFERENCIA ',
    description: 'https://www.grupolaganga.com/fe/',
  },
  {
    icon: gama,
    title: 'GAMA',
    description: 'https://www.distribuidoragama.com.ec/',
  },
  {
    icon: cafe,
    title: 'CAFE GARDELLA',
    description: 'https://www.cafe-gardella.com/',
  },

];

const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

const CardStyle = styled(Card)(({ theme }) => {
  const shadowCard = (opacity) =>
    theme.palette.mode === 'light'
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  return {
    border: 0,
    maxWidth: 380,
    minHeight: 440,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(10, 5, 0),
    boxShadow: theme.customShadows.z12,
    [theme.breakpoints.up('md')]: {
      boxShadow: 'none',
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    '&.cardLeft': {
      [theme.breakpoints.up('md')]: { marginTop: -40 },
    },
    '&.cardCenter': {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
        },
      },
    },
  };
});

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 25 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              ADM ENTERPRISE
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">NUESTROS CLIENTES</Typography>
          </m.div>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}>
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{
                    mb: 10,
                    mx: 'auto',
                    width: 240,
                    height: 100,
                    filter: (theme) => shadowIcon(theme.palette.primary.main),
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main),
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main),
                    })
                  }}
                />
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Typography variant="div" sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>
                  <Button size="small" href={card.description} target="_blank">
                    Ir al sitio web
                  </Button>
                </Typography>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
