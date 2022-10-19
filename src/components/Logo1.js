import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// // imagen de birobid
import imagenlogo from '../assets/imagenes/logo_birobid.png'
import { PATH_DASHBOARD } from '../routes/paths'
// import logobirobid from '../../public/logo/birobid.png'

// ----------------------------------------------------------------------

Logo1.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};


export default function Logo1({ disabledLink = false, sx }) {
  // const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 120, height: 50, ...sx }}>
      <img src={imagenlogo} alt="logo"/>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to={`${PATH_DASHBOARD.inicio}`}>{logo}</RouterLink>;
}

