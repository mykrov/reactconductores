import { TextField, FormHelperText } from '@mui/material';
import { styled } from '@mui/system';

const RequiredTextField = styled(TextField, FormHelperText)(({theme}) => ({
    ".MuiFormLabel-root": {   
        'WebkitTextFillColor': "#bb1f30"  
    },
    ".MuiFormHelperText-root": {   
        'WebkitTextFillColor': "#bb1f30"  
    },
    ".MuiOutlinedInput-input":{
        "textTransform" : "uppercase" 
    }
}));

export default RequiredTextField;

