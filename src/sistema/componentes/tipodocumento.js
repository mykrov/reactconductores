import { TextField, MenuItem } from "@mui/material";
import * as React from 'react';
import axios from "axios";
import { URLAPIGENERAL} from "../../config";


export default function TipoDocumento(props) {
    const [tipocumento, setTipoDocumento] = React.useState("");
    const [listartipodoc, setListarTipoDoc] = React.useState([]);
    const obtenerTipoDocumento = async () => {
        try {
            const { data } = await axios(`${URLAPIGENERAL}/mantenimientogenerico/listarportabla?tabla=CXC_TIPODOC`)
            setListarTipoDoc(data);
            setTipoDocumento(data[0].codigo);
        } catch {
            setListarTipoDoc([{ codigo: '--', nombre: '----' }]);
        }
    }
    // CAMBIAR VALOR
    // eslint-disable-next-line react/prop-types
    props.data.tipodoc = tipocumento;
    // console.log("mira",props);
    React.useEffect(() => {
        obtenerTipoDocumento();
    }, [])
    return (
        <TextField
            select
            label="Tipo"
            value={tipocumento}
            onChange={(e) => {
                setTipoDocumento(
                    e.target.value
                )
            }}
            fullWidth
            size="small"
        >
            {
                listartipodoc.map(t =>
                    <MenuItem key={t.codigo} value={t.codigo}> {t.nombre}</MenuItem>
                )
            }
        </TextField>
    );
}