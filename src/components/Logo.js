import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// // imagen de birobid
import logobirobid from '../assets/imagenes/logoini.svg'
import { PATH_DASHBOARD, PATH_SISTEMA } from '../routes/paths'

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};
Logo1.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  // const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 50, height: 50, ...sx }}>
      <img src={logobirobid} alt="logo"/>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/empresa/inicio">{logo}</RouterLink>;
}
function Logo1({ disabledLink = false, sx }) {
  // const theme = useTheme();
  // const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 150, height: 100, ...sx }}>
      <img src="https://birobid.com/wp/wp-content/uploads/2019/05/logo_empresa-1.png" alt="logo"/>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to={`${PATH_SISTEMA.inicio}`}>{logo}</RouterLink>;
}


