import { m } from 'framer-motion';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: 'https://img.icons8.com/color/48/000000/damaged_parcel.png',
    title: 'Distribuidoras de consumo masivo',
    description:
      'Empresas comerciales que realizan pre-venta, cuentan con una fuerza comercial de vendedores y despachadores.',
  },
  {
    icon: 'https://img.icons8.com/stickers/100/000000/pills.png',
    title: 'Farmacias',
    description: 'La gestión de medicamentos implica el seguimiento de lotes de producción, fechas de producción, fechas de caducidad de los diferentes productos comercializados.',
  },
  {
    icon: 'https://img.icons8.com/stickers/100/000000/mobile-order.png',
    title: 'Empresas comerciales con vendedores',
    description: 'Toda empresa comercial que cuente con fuerza de ventas para realizar sus procesos comerciales.',
  },
  {
    icon: 'https://img.icons8.com/stickers/100/000000/shopping-cart-loaded.png',
    title: 'Comisariatos',
    description:
      'Los locales comerciales de atención al público necesitan un sistema P.O.S. Sumado a las formar comerciales de supermercados grandes han generado un sistema P.O.S. ideal para esta forma de vender',
  },
  {
    icon: 'https://img.icons8.com/stickers/100/000000/company.png',
    title: 'Empresas',
    description: 'Muchos locales comerciales de atención al público necesitan un sistema P.O.S. versátil, rápido y moderno que le permita atender en el menor tiempo posible a los clientes.',
  },
  {
    icon: 'https://img.icons8.com/color/48/000000/appliances.png',
    title: 'Electrodomésticos',
    description: 'Empresas comerciales que realizan preventas, con facultad comercial de vendedores y despachadores.',
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
            <Typography variant="h2">¿Que tipos de negocios cubrimos?</Typography>
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
                    width: 40,
                    height: 40,
                    filter: (theme) => shadowIcon(theme.palette.primary.main),
                    ...(index === 0 && {
                      filter: (theme) => shadowIcon(theme.palette.info.main),
                    }),
                    ...(index === 1 && {
                      filter: (theme) => shadowIcon(theme.palette.error.main),
                    }),
                  }}
                />
                <Typography variant="h5" paragraph>
                  {card.title}
                </Typography>
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{card.description}</Typography>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
