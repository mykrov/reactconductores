import {
    Grid,
    Card
} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormAsig from './components/FormAsig';

export default function Asignacion() {
    return (
        <>
            <div
                style={{
                    marginLeft: '0rem',
                    marginRight: '0rem',
                    marginBottom: '1rem',
                    paddingTop: '0rem',
                }}
            >
                <Box sx={{ ml: 1, mr: 3, pt: 1, pl: 2 }}  >
                    {/* Formulario */}
                    <FormAsig />
                </Box>
            </div>

        </>
    );
}
