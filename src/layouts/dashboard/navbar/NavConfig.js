import { PATH_SISTEMA } from '../../../routes/paths';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  booking: getIcon('ic_booking'),
  invoice: getIcon('ic_invoice'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  // tus iconos
  ventafacturacion: getIcon('ic_ventafacturacion'),
  inventariokardex: getIcon('ic_inventariokardex'),
  clientectacobrar: getIcon('ic_clientectacobrar'),
  proveedor: getIcon('ic_proveedor'),
  pospuntoventa: getIcon('ic_pospuntoventa'),
  nominarol: getIcon('ic_nominarol'),
  contabilidadbancos: getIcon('ic_contabilidadbancos')
};

const iconosModulos =[
  { nombre : 'ADM' , icono: getIcon('ic_analytics')},
  { nombre : 'CNT' , icono: getIcon('ic_contabilidadbancos')},
  { nombre : 'CXC' , icono: getIcon('ic_clientectacobrar')},
  { nombre : 'CXP' , icono: getIcon('ic_proveedor')},
  { nombre : 'INV' , icono: getIcon('ic_inventariokardex')},
  { nombre : 'NOM' , icono: getIcon('ic_nominarol')},
  { nombre : 'POS' , icono: getIcon('ic_pospuntoventa')},
  { nombre : 'VEN' , icono: getIcon('ic_ventafacturacion')}
]
 
// Menú dinámico desde localStorage.
const session = JSON.parse(window.localStorage.getItem('session'));
const navConfig = [{
  subheader: 'MÓDULOS',
  items: []
}];

if(session){
  const { menu } = session
  // Ordernar Descendente nombre de Modulos
  const menuSorted = menu.modulos.sort((a, b) => {
    const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
    const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
    if (nameA > nameB) {
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });

  const itemsNav = menuSorted.map(mod => ({
    title: mod.nombre.trim(),
    icon: iconosModulos.filter(ic => ic.nombre === mod.codigo)[0].icono,
    children: menu.menus
      .filter(mn => mn.modulo.trim() === mod.codigo.trim())
      .map(mn2 => ({
        title: mn2.nombre.trim(),
        children: menu.opciones
          .filter(op => op.modulo.trim() === mod.codigo.trim() && op.menu.trim() === mn2.codigo.trim() && op.nombre_Pag !== '.' )
          .map(opc => ({
            title: opc.nombre.trim(),
            path: `/sistema/${opc.nombre_Pag.replace('/','').trim()}`
          }))
      }))
  }));
  navConfig[0].items = itemsNav;
}

// const navConfigOld = [
//   // GENERAL
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'MÓDULOS',
//     items: [
//       {
//         title: 'Ventas - Facturación',
//         // path: PATH_DASHBOARD.user.root,
//         icon: ICONS.ventafacturacion,
//         children: [
//           // {
//           //   title: 'Pedidos de Clientes',
//           //   children:[
//           //     // { title: 'Detallado Por Pedido', path: PATH_DASHBOARD.informedetalladopedido },
//           //     // { title: 'Devolucion Doc. Lote', path: PATH_SISTEMA.ventas_facturacion.pedidos_de_cliente.devolucion_doc_lote },
//           //     // { title: 'Edicion Lote', path: PATH_DASHBOARD.venedicionpedlote },
//           //     // { title: 'Liberacion de Pedido', path: PATH_DASHBOARD.informeliberacionpedido },
//           //   ]
//           // },
//           {
//             title: 'Venta Documentos',
//             children: [
//               {
//                 title: 'Facturación Venta Directa',
//                 path: PATH_SISTEMA.ventas_facturacion.venta_documentos.fac_venta_lote,
//               },
//               {
//                 title: 'Nota de Crédito Devolución',
//                 path: PATH_SISTEMA.ventas_facturacion.venta_documentos.devoluciondocumento,
//               },
//             ],
//           },
//           // {
//           //   title: 'Guia de Entrega',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Condiciones Comerciales',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Hoja de Ruta',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           {
//             title: 'Informes de Ventas',
//             children: [
//               // { title: 'Doc. Dev. Por Vendedor', path: PATH_SISTEMA.documentodevueltoporvendedor },
//               {
//                 title: 'Doc. Facturados por Vendedor',
//                 path: PATH_SISTEMA.ventas_facturacion.informes_de_ventas.doc_facturado_vendedor,
//               },
//               {
//                 title: 'Doc. Devueltos por Vendedor',
//                 path: PATH_SISTEMA.ventas_facturacion.informes_de_ventas.doc_devuelto_vendedor,
//               },
//               // { title: 'Informe Ventas Por Cliente', path: PATH_SISTEMA.informeventaxcliente },
//               // { title: 'Informe Lista de Precios', path: PATH_SISTEMA.informelistaprecio },
//               // { title: 'Informe Venta Netas', path: PATH_SISTEMA.veninformeventasnetas },
//             ],
//           },
//           // {
//           //   title: 'Estadisticas de Ventas',
//           //   children:[
//           //     { title: 'Estadisticas por Proveedor', path: PATH_DASHBOARD.venestadisticaprovvedor},
//           //     { title: 'Informe Meta Venta Proveedor', path: PATH_DASHBOARD.veninfmetaventaproveedor },
//           //     { title: 'Informe Meta Venta Pos', path: PATH_DASHBOARD.informemetaventapos },
//           //     { title: 'Meta Venta Pos', path: PATH_DASHBOARD.metaventapos },
//           //     { title: 'Meta Venta', path: PATH_DASHBOARD.metaventa },
//           //   ]
//           // },
//           // {
//           //   title: 'Mantenimiento',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Informes Gerenciales',
//           //   children:[
//           //     { title: 'Analisis de Indicadores Venta', path: PATH_DASHBOARD.venanalisisindicadorventas },
//           //   ]
//           // },
//         ],
//       },
//       {
//         title: 'Inventario - Kardex',
//         icon: ICONS.inventariokardex,
//         children: [
//           {
//             title: 'Ajustes de Inventario',
//             children: [
//               { title: 'Ajuste de Ingreso', path: PATH_SISTEMA.inventario_kardex.ajuste_de_inventario.ajuste_ingreso },
//               { title: 'Ajuste de Egreso', path: PATH_SISTEMA.inventario_kardex.ajuste_de_inventario.ajuste_egreso },
//             ],
//           },
//           {
//             title: 'Informes de Inventario',
//             children: [
//               {
//                 title: 'Informe de Transferencia',
//                 path: PATH_SISTEMA.inventario_kardex.informes_de_inventario.informetransferencia,
//               },
//               {
//                 title: 'Informe de Ajustes de Bodega',
//                 path: PATH_SISTEMA.inventario_kardex.informes_de_inventario.informeajuste,
//               },
//               {
//                 title: 'Informe de Stock por Proveedor Bodega',
//                 path: PATH_SISTEMA.inventario_kardex.informes_de_inventario.inoformeproveedorbod,
//               },
//             ],
//           },

//           // {
//           //   title: 'Informes de Inventario',
//           //   children:[
//           //      { title: 'Informe de Transferencia', path: PATH_SISTEMA.inventario_kardex.informes_de_inventario.informetransferencia },
//           //   ]
//           // },
//           {
//             title: 'Mantenimiento',
//             children: [
//               { title: 'Camiones', path: PATH_SISTEMA.inventario_kardex.mantenimiento.camion.inicio },
//               { title: 'Choferes', path: PATH_SISTEMA.inventario_kardex.mantenimiento.chofer.inicio },
//               {
//                 title: 'Motivos de Movimiento',
//                 path: PATH_SISTEMA.inventario_kardex.mantenimiento.motivo_movimiento.inicio,
//               },
//               { title: 'Nivel 1', path: PATH_SISTEMA.inventario_kardex.mantenimiento.nivel1.inicio },
//               { title: 'Nivel 2', path: PATH_SISTEMA.inventario_kardex.mantenimiento.nivel2.inicio },
//               { title: 'Nivel 3', path: PATH_SISTEMA.inventario_kardex.mantenimiento.nivel3.inicio },
//               { title: 'Productos', path: PATH_SISTEMA.inventario_kardex.mantenimiento.producto.inicio },
//             ],
//           },
//           {
//             title: 'Procesos de Inventario',
//             children: [
//               {
//                 title: 'Aprobacion de Transferencia',
//                 path: PATH_SISTEMA.inventario_kardex.procesos_de_inventario.aprobacion_transferencia,
//               },
//               {
//                 title: 'Orden compra proveedor',
//                 path: PATH_SISTEMA.inventario_kardex.procesos_de_inventario.orden_compra_proveedor,
//               },
//               {
//                 title: 'Tranferencia Bodega',
//                 path: PATH_SISTEMA.inventario_kardex.procesos_de_inventario.transferencia_bodega,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         title: 'Clientes - cta. cobrar',
//         // path: PATH_DASHBOARD.user.root,
//         icon: ICONS.clientectacobrar,
//         children: [
//           {
//             title: 'Procesos de Cartera',
//             children: [
//               {
//                 title: 'Registro de Cobros',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.procesos_de_cartera.registro_cobros,
//               },
//               {
//                 title: 'Nota de Debito Cliente',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.procesos_de_cartera.nota_debito_cliente,
//               },
//             ],
//           },
//           {
//             title: 'Cheques de Clientes',
//             children: [
//               { title: 'Depósito de Cheques', path: PATH_SISTEMA.clientes_cuentas_por_cobrar.cheques_de_clientes.deposito_cheques_cli, },
//               { title: 'Protestos de Cheques de Clientes', path: PATH_SISTEMA.clientes_cuentas_por_cobrar.cheques_de_clientes.protestos },
//               { title: 'Informe de Cheques de Clientes', path: PATH_SISTEMA.clientes_cuentas_por_cobrar.cheques_de_clientes.informe_cheques },
//             ]
//           },
//           // {
//           //   title: 'Movimiento de Caja',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Guia de Cobro',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           {
//             title: 'Informe de Cartera',
//             children: [
//               {
//                 title: 'Informe de Cartera Detalla',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.informes_de_cartera.informe_cartera_detallada,
//               },
//               {
//                 title: 'Informe Cobro de Clientes',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.informes_de_cartera.informe_cobro_clientes,
//               },
//               {
//                 title: 'Saldo de Clientes',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.informes_de_cartera.saldo_clientes,
//               },
//               {
//                 title: 'Informe Retenciones realizadas a la CIA',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.informes_de_cartera.informe_retenciones_cia,
//               },
//             ],
//           },

//           {
//             title: 'Mantenimiento',
//             children: [
//               { title: 'Clientes', path: PATH_SISTEMA.clientes_cuentas_por_cobrar.mantenimiento.cliente.inicio },
//               {
//                 title: 'Motivo de Cartera',
//                 path: PATH_SISTEMA.clientes_cuentas_por_cobrar.mantenimiento.motivo_de_cartera.inicio,
//               },
//             ],
//           },
//           // {
//           //   title: 'Comisiones por Cobro',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//         ],
//       },
//       {
//         title: 'Proveedores - Cta. Pagar',
//         // path: PATH_DASHBOARD.user.root,
//         icon: ICONS.proveedor,
//         children: [
//           {
//             title: 'Deudas a Proveedores',
//             children: [
//               { title: 'Registro de Pago a Proveedores', path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.deudas_a_proveedor.registro_pago },
//               { title: 'Registro Compra de Inventario', path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.deudas_a_proveedor.registro_deuda },
//               { title: 'Registro Compra de Servicio', path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.deudas_a_proveedor.registro_deudaserv },
//               { title: 'Notas de Crédito', path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.deudas_a_proveedor.nota_credito },
//             ]
//           },

//           {
//             title: 'Informes de Cta. por Pagar',
//             children: [
//               {
//                 title: 'Informe de pago a proveedores',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.informe_de_cuentas_por_pagar.informe_pago_proveedores,
//               },
//               {
//                 title: 'Informe de Compras',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.informe_de_cuentas_por_pagar.informe_compras,
//               },
//               {
//                 title: 'Informe Notas de Crédito Proveedor',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.informe_de_cuentas_por_pagar.informe_ncr_proveedor,
//               },
//             ],
//           },

//           {
//             title: 'Cheques Girados',
//             children: [
//               {
//                 title: 'Cheques Girados',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.cheques_girados.cheques_girados,
//               },
//             ],
//           },
//           {
//             title: 'Mantenimiento',
//             children: [
//               {
//                 title: 'Proveedores',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.mantenimiento.proveedor.inicio,
//               },
//               {
//                 title: 'Rubros Compras',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.mantenimiento.rubros_compra.inicio,
//               },
//             ],
//           },
//           // {
//           //   title: 'Informe Gerencial',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           {
//             title: 'Retenciones',
//             children: [
//               {
//                 title: 'Retenciones de proveedores',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.retenciones.retencion,
//               },
//               {
//                 title: 'Informe de Retenciones',
//                 path: PATH_SISTEMA.proveedores_cuentas_por_cobrar.retenciones.informe_retencion,
//               },
//             ],
//           },
//         ],
//       },
//       // {
//       //   title: 'Pos - Punto de venta',
//       //   path: PATH_DASHBOARD.user.root,
//       //   icon: ICONS.pospuntoventa,
//       //   children: [
//       //     {
//       //       title: 'Procesos de caja',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Facturacion en Pos',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Informes de Pos',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Retiro Dinero',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Mantenimiento',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //   ],
//       // },
//       // {
//       //   title: 'Nomina - Roles',
//       //   path: PATH_DASHBOARD.user.root,
//       //   icon: ICONS.nominarol,
//       //   children: [
//       //     {
//       //       title: 'Proceso de Nomina',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Informes',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //     {
//       //       title: 'Mantenimiento',
//       //       children:[
//       //         // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//       //       ]
//       //     },
//       //   ],
//       // },
//       {
//         title: 'Contabilidad - Bancos',
//         // path: PATH_DASHBOARD.user.root,
//         icon: ICONS.contabilidadbancos,
//         children: [
//           {
//             title: 'Comprobante Contable',
//             children: [
//               {
//                 title: 'Comprobante Contable',
//                 path: PATH_SISTEMA.contabilidad_bancos.comprobante_contable.comprobantecontable,
//               },
//             ],
//           },
//           {
//             title: 'Estados Financieros',
//             children: [
//               {
//                 title: 'Balance Comprobacion',
//                 path: PATH_SISTEMA.contabilidad_bancos.estados_financieros.balance_comprobacion,
//               },
//               {
//                 title: 'Estados Situacion',
//                 path: PATH_SISTEMA.contabilidad_bancos.estados_financieros.estado_situacion,
//               },
//               {
//                 title: 'Estados de Resulados Periodo',
//                 path: PATH_SISTEMA.contabilidad_bancos.estados_financieros.estadoresultadop,
//               },
//             ],
//           },
//           {
//             title: 'Procesos Contables',
//             children: [
//               {
//                 title: 'Contabilizar Comprobante',
//                 path: PATH_SISTEMA.contabilidad_bancos.procesos_contables.contabilizar_comprobante,
//               },
//             ],
//           },
//           {
//             title: 'Mantenimiento',
//             children: [
//               {
//                 title: 'Tipo de Asientos',
//                 path: PATH_SISTEMA.contabilidad_bancos.mantenimiento.asiento_contable.inicio,
//               },

//               { title: 'Bancos CIA', path: PATH_SISTEMA.contabilidad_bancos.mantenimiento.bancocia.inicio },
//               { title: 'Beneficiario', path: PATH_SISTEMA.contabilidad_bancos.mantenimiento.beneficiario.inicio },
//               {
//                 title: 'Cuentas Contables',
//                 path: PATH_SISTEMA.contabilidad_bancos.mantenimiento.cuenta_contable.inicio,
//               },
//               {
//                 title: 'Motivos Mov. Bancarios',
//                 path: PATH_SISTEMA.contabilidad_bancos.mantenimiento.movimientobancocia.inicio,
//               },
//             ],
//           },
//           {
//             title: 'Bancos',
//             children: [
//               {
//                 title: 'Informe Movimiento Bancario',
//                 path: PATH_SISTEMA.contabilidad_bancos.bancos.informemovimientobancario,
//               },
//               {
//                 title: 'Registro Movimiento Bancario',
//                 path: PATH_SISTEMA.contabilidad_bancos.bancos.registromovimientobancario,
//               }
//             ],
//           },
//           // {
//           //   title: 'Tarjetas de Credito',
//           //   children:[
//           //     // // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           {
//             title: 'Plantilla Contable',
//             children: [
//               { title: 'Asiento Contable', path: PATH_SISTEMA.contabilidad_bancos.plantilla_contable.asiento_contable },
//             ],
//           },
//           {
//             title: 'Informes Contables',
//             children: [
//               {
//                 title: 'Auxiliar Mayor por Fecha',
//                 path: PATH_SISTEMA.contabilidad_bancos.informes_contables.auxiliarmayorporfecha,
//               },
//             ],
//           },
//           // {
//           //   title: 'Relacion Contable',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Presupuesto Empresarial',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//         ],
//       },
//       {
//         title: 'Parametros Del Sistema',
//         // path: PATH_DASHBOARD.user.root,
//         icon: ICONS.kanban,
//         children: [
//           {
//             title: 'Mantenimiento',
//             children: [
//               {
//                 title: 'Asignacion de Precios',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.asignacion_precio.inicio,
//               },
//               { title: 'Apertura Caja', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.aperturarcaja.inicio },
//               { title: 'Bodegas', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.bodega.inicio },
//               { title: 'Caja', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.caja.inicio },
//               { title: 'Contadores', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.contador.inicio },
//               {
//                 title: 'Codigo Retencion',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.codigo_retencion.inicio,
//               },
//               { title: 'Dias Credito', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.dias_credito.inicio },
//               { title: 'Empresa', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.empresa.inicio },
//               {
//                 title: 'Establecimiento',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.establecimiento.inicio,
//               },
//               {
//                 title: 'Frecuencia de Visitas',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.visitas_frecuentes.inicio,
//               },
//               // { title: 'Grupos de Descuento para Productos', path: PATH_DASHBOARD.admgrupodescuentoporproducto},
//               // { title: 'Grupos de Descuento para Clientes', path: PATH_DASHBOARD.admgrupodescuentoporcliente},
//               {
//                 title: 'Mantenimientos Genericos',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.generico.inicio,
//               },
//               { title: 'Personas', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.persona.inicio },
//               {
//                 title: 'Precio por Clientes',
//                 path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.asignacion_precio_cliente.inicio,
//               },
//               { title: 'Rango de Precio', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.rango_precio },
//               { title: 'Representantes', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.representante.inicio },
//               // { title: 'Roles de usuarios', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.permisos },
//               { title: 'Sucursales', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.sucursal.inicio },
//               // { title: 'Menu', path: PATH_DASHBOARD.admmenu},
//               { title: 'Permisos', path: PATH_SISTEMA.parametros_del_sistema.mantenimiento.permisos },
//             ],
//           },
//           // {
//           //   title: 'Eliminacion Logica',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Anexo Transaccional',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//           // {
//           //   title: 'Informes de Sistemas',
//           //   children:[
//           //     // { title: 'Opciones', path: PATH_DASHBOARD.inicio },
//           //   ]
//           // },
//         ],
//       },
//     ],
//   },
// ];

export default navConfig;
