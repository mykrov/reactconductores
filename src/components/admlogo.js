import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
// import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
// // imagen de birobid
// import logobirobid from '../../public/logo/birobid.png'
import { PATH_DASHBOARD } from '../routes/paths'
import admlogo from '../assets/imagenes/inicio/admlogo.png'

// ----------------------------------------------------------------------


AdmLogo.propTypes = {
    disabledLink: PropTypes.bool,
    sx: PropTypes.object,
};


export default function AdmLogo({ disabledLink = false, sx }) {
    // const theme = useTheme();
    // const PRIMARY_LIGHT = theme.palette.primary.light;
    // const PRIMARY_MAIN = theme.palette.primary.main;
    // const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
        <Box sx={{ mt: 1, width: 100, height: 70, ...sx }}>
            <img src={admlogo} alt="logo" />
        </Box>
    );

    if (disabledLink) {
        return <>{logo}</>;
    }

    return <RouterLink to={`${PATH_DASHBOARD.inicio}`}>{logo}</RouterLink>;
}


