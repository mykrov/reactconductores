import * as React from 'react';
import axios from 'axios';
// hooks
import useAuth from '../hooks/useAuth';
// utils
import createAvatar from '../utils/createAvatar';
//
import Avatar from './Avatar';
// imagenes de birobid
// import usuario from '../assets/imagenes/usuarios/usuario.png'
// empresa
import { URLEMRPRESA } from '../config';
// ----------------------------------------------------------------------

export default function MyAvatar({ ...other }) {
  const { user } = useAuth();
  const [logoempresa, setLogoEmpresa] = React.useState("");
  // let logo = ""
  // console.log("mira",logo);
  const RUC = window.localStorage.getItem('ruc')
  React.useEffect(()=>{
    async function obtenerEmpresa() {
        const response = await axios(URLEMRPRESA);
        const rucobtenido = response.data.filter((e) => e.RUC === RUC);
        setLogoEmpresa(rucobtenido[0].imagen)
        console.log(rucobtenido[0].imagen)
        // eslint-disable-next-line react-hooks/exhaustive-deps
        // logo = rucobtenido[0].imagen;
    }
    obtenerEmpresa();
  },[RUC])
  return (
    <Avatar
      src={logoempresa}
      alt={user?.displayName}
      color={user?.photoURL ? 'default' : createAvatar(user?.displayName).color}
      {...other}
    >
      {createAvatar(user?.displayName).name}
    </Avatar>
  );
}
