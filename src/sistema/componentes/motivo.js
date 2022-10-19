import * as React from 'react';
import axios from 'axios';
import { TextField, MenuItem } from '@mui/material';
import { URLAPIGENERAL } from '../../config';

// MOTIVO DE DEV
export function MotivoEgreso(props) {

 const [motivoegreso, setTipoMotivo] = React.useState('');
  const [listarmotivo, setListarMotivo] = React.useState([]);
  const obtenerTipoDocumento = async () => {
    try {
      const { data } = await axios(`${URLAPIGENERAL}/motivos/obtenerportipodoc?tipodoc=AJE`);
      setListarMotivo(data);
      setTipoMotivo(data[0].codigo);
    } catch {
      setListarMotivo([{ codigo: '--', nombre: '----' }]);
    }
  };
  // CAMBIAR VALOR
  // eslint-disable-next-line react/prop-types
  props.data.tipomotivo = motivoegreso;
  // console.log("mira",props);
  React.useEffect(() => {
    obtenerTipoDocumento();
  }, []);
  return (
    <TextField
      select
      label="Motivo"
      value={motivoegreso}
      onChange={(e) => {
        setTipoMotivo(e.target.value);
      }}
      fullWidth
      size="small"
    >
      {listarmotivo.map((t) => (
        <MenuItem key={t.codigo} value={t.codigo}>
          {' '}
          {t.nombre}
        </MenuItem>
      ))}
    </TextField>
  );
}

export function MotivoIngreso(props) {

    const [tipocumento, setTipoDocumento] = React.useState('');
     const [listartipodoc, setListarTipoDoc] = React.useState([]);
     const obtenerTipoDocumento = async () => {
       try {
         const { data } = await axios(`${URLAPIGENERAL}/motivos/obtenerportipodoc?tipodoc=AJI`);
         setListarTipoDoc(data);
         setTipoDocumento(data[0].codigo);
       } catch {
         setListarTipoDoc([{ codigo: '--', nombre: '----' }]);
       }
     };
     // CAMBIAR VALOR
     // eslint-disable-next-line react/prop-types
     props.data.tipodoc = tipocumento;
     // console.log("mira",props);
     React.useEffect(() => {
       obtenerTipoDocumento();
     }, []);
     return (
       <TextField
         select
         label="Motivo"
         value={tipocumento}
         onChange={(e) => {
           setTipoDocumento(e.target.value);
         }}
         fullWidth
         size="small"
       >
         {listartipodoc.map((t) => (
           <MenuItem key={t.codigo} value={t.codigo}>
             {' '}
             {t.nombre}
           </MenuItem>
         ))}
       </TextField>
     );
   }
   
//   const [listarmotivo, setListarMotivo] = React.useState(['']);
  //   React.useEffect(() => {
  //     const obtenerMotivo = async () => {
  //       try {
  //         const { data } = await axios(`${URLAPIGENERAL}/motivos/listar`);
  //         setListarMotivo(data);
  //         // setTipoGrupo(data[0].codigo);
  //       } catch {
  //         setListarMotivo([]);
  //       }
  //     };
  //     obtenerMotivo();
  //   }, []);