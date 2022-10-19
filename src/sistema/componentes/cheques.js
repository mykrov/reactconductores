import * as React from 'react';
import { jsPDF } from 'jspdf';
import { Button, Grid } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import InventoryIcon from '@mui/icons-material/Inventory';
import PropTypes from 'prop-types';
import NumeroALetras from './NumeroALetras';

export default function Cheque(props) {
  const { nombrebeneficiario, ciudad, total, incialbanco, desactivar } = props;
  console.log('cheque',nombrebeneficiario, ciudad, total, incialbanco, desactivar)
  // Medidas para el cheque siempre se lo ingresa esquinado del lado de donde empieza la hoja
  
  const bancos = [
    {
      inicialbanco: 'PIC',
      medidanombrebene: 8,
      medidanombrebene1: 2.4,
      medidatotal: 18.5,
      medidatotal1: 2.4,
      medidatotalletras: 8,
      medidatotalletras1: 3.1,
      medidasciudadfecha: 7.7,
      medidasciudadfecha1: 4.2,
    },
    {
      inicialbanco: 'PAC',
      medidanombrebene: 0,
      medidanombrebene1: 0,
      medidatotal: 0,
      medidatotal1: 0,
      medidatotalletras: 0,
      medidatotalletras1: 0,
      medidasciudadfecha: 0,
      medidasciudadfecha1: 0,
    },
    {
      inicialbanco: 'GGG',
      medidanombrebene: 0,
      medidanombrebene1: 0,
      medidatotal: 0,
      medidatotal1: 0,
      medidatotalletras: 0,
      medidatotalletras1: 0,
      medidasciudadfecha: 0,
      medidasciudadfecha1: 0,
    },
    {
      inicialbanco: 'BOL',
      medidanombrebene: 8,
      medidanombrebene1: 2,
      medidatotal: 18.5,
      medidatotal1: 2,
      medidatotalletras: 8,
      medidatotalletras1: 2.5,
      medidasciudadfecha: 7.5,
      medidasciudadfecha1: 3.7,
    },
  ];

  // const nombreBeneficiario = 'JAZMANY CORREA';
  const totaletras = NumeroALetras(total);
  // const Ciudad = 'Guayaquil';
  const fecha = new Date().toLocaleDateString();

  const obtenerCheque = () => {
    const chequef = bancos.filter((f) => f.inicialbanco === incialbanco);

    // eslint-disable-next-line new-cap
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'cm',
      format: [30, 30],
    });
    doc.setFontSize(10);
    doc.text(nombrebeneficiario.toLocaleUpperCase(), chequef[0].medidanombrebene, chequef[0].medidanombrebene1);
    doc.text(total.toString(), chequef[0].medidatotal, chequef[0].medidatotal1);
    doc.text(totaletras, chequef[0].medidatotalletras, chequef[0].medidatotalletras1);
    doc.text(`${ciudad} ${fecha}`, chequef[0].medidasciudadfecha, chequef[0].medidasciudadfecha1);
    doc.save('Cheque.pdf');
  };

  return (
    <>
      <Grid item md={1.2} sm={2} xs={12}>
        <Button
          disabled={desactivar} 
          fullWidth 
          onClick={() => obtenerCheque()} 
          variant="text" 
          startIcon={<PrintIcon />}>
          Cheque
        </Button>
      </Grid>
    </>
  );
}

Cheque.propTypes = {
  nombrebeneficiario: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  ciudad: PropTypes.string.isRequired,
  incialbanco: PropTypes.string.isRequired,
  desactivar: PropTypes.bool
};

// Cheque del Banco del Bolibariano
// const obtenerCheque = () => {
//   // eslint-disable-next-line new-cap
//   const doc = new jsPDF({
//     orientation: 'p',
//     unit: 'cm',
//     format: [30, 30],
//   });
//   doc.setFontSize(10)
//   doc.text('Jazmany Correa', 8, 2);
//   doc.text('850.55', 18.5, 2);
//   doc.text('Ciento Cincuenta', 8, 2.5);
//   doc.text('Guayaquil 23/09/2022', 7.5, 3.7);
//   doc.save('Cheque.pdf');
// };
