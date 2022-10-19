import { FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const RequiredTextField = styled(FormHelperText)(({theme}) => ({
    ".MuiFormHelperText-root": {   
        'WebkitTextFillColor': "#bb1f30"  
    },
}));

export default RequiredTextField;
