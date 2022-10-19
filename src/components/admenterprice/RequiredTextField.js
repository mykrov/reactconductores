import { TextField } from '@mui/material';
import { styled } from '@mui/system';

// eslint-disable-next-line no-unused-vars
const RequiredTextField = styled(TextField)(({theme}) => ({
    ".MuiFormLabel-root": {   
        '-webkitTextFillColor': "#bb1f30"        
    }
}));

export default RequiredTextField;

