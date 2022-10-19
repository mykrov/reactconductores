import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Typography } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
// import Logo1 from '../../../components/Logo1';
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR, URLEMRPRESA } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import AccountPopover from './AccountPopover';
// import imagenlogo from '../../../assets/imagenes/logo_birobid.png'

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const isDesktop = useResponsive('up', 'lg');
  const [nombreempresa, setNombreEmpresa] = React.useState("");
  const RUC = window.localStorage.getItem('ruc')
  const { nombre } = JSON.parse(window.localStorage.getItem('datossucursal'));
  // console.log("mira",ruc,nombreempresa);
  React.useEffect(()=>{
    async function obtenerEmpresa() {
        const response = await axios(URLEMRPRESA);
        const rucobtenido = response.data.filter((e) => e.RUC === RUC);
        setNombreEmpresa(rucobtenido[0].nombre)
        console.log(RUC);
    }
    obtenerEmpresa();
  },[RUC])
  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >

        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}
        {/* <Box sx={{ width: 180, height: 120, }}>
          <img src={imagenlogo} alt="logo" />
        </Box> */}

        {!isDesktop && (
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        )}
        {/* <DashboardIcon sx={{ color: 'text.primary' }} /> */}
        <Typography sx={{ ml: 1, mr: 1, color: 'text.primary', fontSize: '1rem', fontWeight: 'bold' }}> {nombreempresa.toUpperCase()} - { `${nombre}`.toUpperCase() } </Typography>
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          {isDesktop ?
            <Typography
              sx={{
                ml: 1, mr: 1, color: 'text.primary',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              AFRODITA WEB
            </Typography> : ""
          }
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
