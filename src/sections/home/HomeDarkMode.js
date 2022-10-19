// import { m } from 'framer-motion';
// // @mui
// import { styled } from '@mui/material/styles';
// import { Box, Grid, Container, Typography } from '@mui/material';
// // components
// import Image from '../../components/Image';
// import { MotionViewport, varFade } from '../../components/animate';

// // ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(28, 0),
//   backgroundColor: theme.palette.grey[900],
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   textAlign: 'center',
//   position: 'relative',
//   marginBottom: theme.spacing(10),
//   [theme.breakpoints.up('md')]: {
//     height: '100%',
//     marginBottom: 0,
//     textAlign: 'left',
//     display: 'inline-flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// }));

// // ----------------------------------------------------------------------

// export default function HomeDarkMode() {
//   return (
//     <RootStyle>
//       <Container component={MotionViewport} sx={{ position: 'relative' }}>
//         <Image
//           visibleByDefault
//           disabledEffect
//           alt="image shape"
//           src="https://minimal-assets-api.vercel.app/assets/images/home/shape.svg"
//           sx={{
//             top: 0,
//             right: 0,
//             bottom: 0,
//             width: 720,
//             height: 720,
//             opacity: 0.48,
//             my: 'auto',
//             position: 'absolute',
//             display: { xs: 'none', md: 'block' },
//           }}
//         />

//         <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
//           <Grid item xs={12} md={4}>
//             <ContentStyle>
//               <m.div variants={varFade().inUp}>
//                 <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
//                   Easy switch between styles.
//                 </Typography>
//               </m.div>

//               <m.div variants={varFade().inUp}>
//                 <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
//                   Dark mode
//                 </Typography>
//               </m.div>

//               <m.div variants={varFade().inUp}>
//                 <Typography sx={{ color: 'common.white', mb: 5 }}>
//                   A dark theme that feels easier on the eyes.
//                 </Typography>
//               </m.div>
//             </ContentStyle>
//           </Grid>

//           <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
//             <m.div variants={varFade().inUp}>
//               <Image alt="light mode" src="https://minimal-assets-api.vercel.app/assets/images/home/lightmode.png" />
//             </m.div>

//             <Box component={m.div} variants={varFade().inDown} sx={{ top: 0, left: 0, position: 'absolute' }}>
//               <Image alt="dark mode" src="https://minimal-assets-api.vercel.app/assets/images/home/darkmode.png" />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </RootStyle>
//   );
// }

// import { m } from 'framer-motion';
// // @mui
// import { alpha, useTheme, styled } from '@mui/material/styles';
// import { Box, Card, Container, Typography } from '@mui/material';
// // components
// import Image from '../../components/Image';
// import { MotionViewport, varFade } from '../../components/animate';

// // ----------------------------------------------------------------------

// const CARDS = [
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/internet.png',
//     title: 'Desarrollo Web - Lenguajes y Frameworks',
//     description:
//       'PHP, CMS Wordpress, Laravel, JavaScript, Node JS, ReactJS, C#, ASP .NET, MVC5 y .Net Core. ',
//   },
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/application-window.png',
//     title: 'Desarrollo Escritorio -Lenguajes y Frameworks ',
//     description: 'Visual Fox Pro, Visual Basic(.NET), C# y Python  .',
//   },
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/developer-mode.png',
//     title: 'Desarrollo Móvil -Lenguajes y  Frameworks',
//     description: 'Dart, Framework Flutter, React Navitve  .',
//   },
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/load-balancer.png',
//     title: 'Bases de Datos',
//     description:
//       'SQL Server, MySQL, SQlite  .',
//   },
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/developer-mode.png',
//     title: 'Desarrollo Móvil -Lenguajes y  Frameworks',
//     description: 'Dart, Framework Flutter, React Navitve  .',
//   },
//   {
//     icon: 'https://img.icons8.com/stickers/100/000000/load-balancer.png',
//     title: 'Bases de Datos',
//     description:
//       'SQL Server, MySQL, SQlite  .',
//   },
// ];

// const shadowIcon = (color) => `drop-shadow(2px 2px 2px ${alpha(color, 0.48)})`;

// const RootStyle = styled('div')(({ theme }) => ({
//   paddingTop: theme.spacing(15),
//   [theme.breakpoints.up('md')]: {
//     paddingBottom: theme.spacing(15),
//   },
// }));

// const CardStyle = styled(Card)(({ theme }) => {
//   const shadowCard = (opacity) =>
//     theme.palette.mode === 'light'
//       ? alpha(theme.palette.grey[500], opacity)
//       : alpha(theme.palette.common.black, opacity);

//   return {
//     border: 0,
//     maxWidth: 380,
//     minHeight: 440,
//     margin: 'auto',
//     textAlign: 'center',
//     padding: theme.spacing(10, 5, 0),
//     boxShadow: theme.customShadows.z12,
//     [theme.breakpoints.up('md')]: {
//       boxShadow: 'none',
//       backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//     },
//     '&.cardLeft': {
//       [theme.breakpoints.up('md')]: { marginTop: -40 },
//     },
//     '&.cardCenter': {
//       [theme.breakpoints.up('md')]: {
//         marginTop: -80,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
//         '&:before': {
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           zIndex: -1,
//           content: "''",
//           margin: 'auto',
//           position: 'absolute',
//           width: 'calc(100% - 40px)',
//           height: 'calc(100% - 40px)',
//           borderRadius: Number(theme.shape.borderRadius) * 2,
//           backgroundColor: theme.palette.background.paper,
//           boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`,
//         },
//       },
//     },
//   };
// });

// // ----------------------------------------------------------------------

// export default function HomeMinimal() {
//   const theme = useTheme();

//   const isLight = theme.palette.mode === 'light';

//   return (
//     <RootStyle>
//       <Container component={MotionViewport}>
//         <Box
//           sx={{
//             textAlign: 'center',
//             mb: { xs: 10, md: 25 },
//           }}
//         >
//           <m.div variants={varFade().inUp}>
//             <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
//               ADM ENTERPRISE
//             </Typography>
//           </m.div>
//           <m.div variants={varFade().inDown}>
//             <Typography variant="h2">¿Que tipos de negocios cubrimos?</Typography>
//           </m.div>
//         </Box>

//         <Box
//           sx={{
//             display: 'grid',
//             gap: { xs: 5, lg: 10 },
//             gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
//           }}
//         >
//           {CARDS.map((card, index) => (
//             <m.div variants={varFade().inUp} key={card.title}>
//               <CardStyle className={(index === 0 && 'cardLeft') || (index === 1 && 'cardCenter') || ''}>
//                 <Image
//                   src={card.icon}
//                   alt={card.title}
//                   sx={{
//                     mb: 10,
//                     mx: 'auto',
//                     width: 40,
//                     height: 40,
//                     filter: (theme) => shadowIcon(theme.palette.primary.main),
//                     ...(index === 0 && {
//                       filter: (theme) => shadowIcon(theme.palette.info.main),
//                     }),
//                     ...(index === 1 && {
//                       filter: (theme) => shadowIcon(theme.palette.error.main),
//                     }),
//                   }}
//                 />
//                 <Typography variant="h5" paragraph>
//                   {card.title}
//                 </Typography>
//                 <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{card.description}</Typography>
//               </CardStyle>
//             </m.div>
//           ))}
//         </Box>
//       </Container>
//     </RootStyle>
//   );
// }

import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Container,
  Typography,
  CardContent,
  // CardActions,
  CardHeader,
  Card,
  CardMedia,
  // Button,
  // IconButton,
} from '@mui/material';
// components
// import Image from '../../components/Image';
import { MotionViewport } from '../../components/animate';
// import marketin from '../../assets/imagen/marketing.png';
// import visualcode from '../../assets/imagen/visualcode.png';

// ----------------------------------------------------------------------

// const RootStyle = styled('div')(({ theme }) => ({
//   padding: theme.spacing(28, 0),
//   backgroundColor: theme.palette.grey[900],
// }));

// const ContentStyle = styled('div')(({ theme }) => ({
//   textAlign: 'center',
//   position: 'relative',
//   marginBottom: theme.spacing(10),
//   [theme.breakpoints.up('md')]: {
//     height: '100%',
//     marginBottom: 0,
//     textAlign: 'left',
//     display: 'inline-flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//   },
// }));

// ----------------------------------------------------------------------
const lenguajes = [
  {
    imagen: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Desarrollo Web',
    subtitulo: 'PHP : ',
    descripcion: 'Paginas Básicas: CMS Wordpress. Sistemas Web y Backend API’s: Framework Laravel.',
    subtitulo1: 'JavaScript :',
    descripcion1: 'Backen API’s : Node JS. Fronted Sistemas Web: Libreria ReactJS',
    subtitulo2: 'C# :',
    descripcion2: 'Sistemas Web y Backend API’s: Framewors ASP .NET MVC5 y .Net Core',
  },
  {
    imagen: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Desarrollo Escritorio',
    subtitulo: 'Visual Fox Pro',
    descripcion: 'Opciones Originales de ADM-Diana',
    subtitulo1: 'Visual Basic(.NET)',
    descripcion1: 'Opciones Actuales ADM-Diana Scripting con C# y Python',
    subtitulo2: '',
    descripcion2: '',
  },
  {
    imagen: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    titulo: 'Desarrollo Móvil',
    subtitulo: 'Dart :',
    descripcion: 'Framework Flutter.',
    subtitulo1: '',
    descripcion1: '',
    subtitulo2: '',
    descripcion2: '',
  },
  {
    imagen: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    titulo: 'Bases de Datos',
    subtitulo: '',
    descripcion: 'SQL Server.',
    subtitulo1: '',
    descripcion1: 'MySQL.',
    subtitulo2: '',
    descripcion2: 'SQlite.',
  }
]

export default function HomeDarkMode() {
  return (
    <Container component={MotionViewport} sx={{ position: 'relative' }}>
      <Grid container spacing={1} justifyContent="center">
        {lenguajes.map((l) =>
          <Grid key={l.titulo} item md={3} sm={6} xs={12}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={l.imagen}
                alt="imagen"
              />
              <CardHeader
                action={''}
                title={l.titulo}
              />
              <CardContent
               sx={{ height:"320px" }}
              >
                <Typography variant="body3" color="text.primary">
                  {l.subtitulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {l.descripcion}
                </Typography>
                <Typography variant="body3" color="text.primary">
                  {l.subtitulo1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {l.descripcion1}
                </Typography>
                <Typography variant="body3" color="text.primary">
                  {l.subtitulo2}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {l.descripcion2}
                </Typography>
              </CardContent>
              {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions> */}
            </Card>
          </Grid>)}
      </Grid>
      {/* <Grid container spacing={1} justifyContent="space-around">
        <Grid item xs={4} md={4}>
        <Card sx={{ Width: 150 }}>
          <CardMedia
            component="img"
            // object = "50"
            // position = "50"
            // height=''
            // marginLeft="5"
            // padding="5"
            image src={visualcode}
          /></Card>
        </Grid>
      </Grid> */}
    </Container>
  );
}

