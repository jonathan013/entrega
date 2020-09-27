import React from 'react'
import readXlsxFile from 'read-excel-file'
import "./css/empresa.css"
import { MDBDataTableV5 } from 'mdbreact';
import AreaTabla from "../areaTabla/AreaTabla"
class EMPRESA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabla: false,
            datos: {
                columns: [{
                    label: 'RAZON SOCIAL',
                    field: 'razon_social',
                    width: 150,
                    attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': 'Name',
                    }
                }, {
                    label: 'NIT',
                    field: 'nit',
                    width: 100,
                }, {
                    label: 'CODIGO',
                    field: 'codigo',
                    width: 100,
                }, {
                    label: 'ALIAS',
                    field: 'alias',
                    width: 100,
                }, {
                    label: 'TELEFONO',
                    field: 'telefono',
                    width: 100,
                }, {
                    label: 'CORREO',
                    field: 'correo',
                    width: 100,
                }, {
                    label: 'DIRECCION',
                    field: 'direccion',
                    width: 100,
                }
                ]
            }

        }
    }


    cargarAccion = () => {
        let { datos } = this.state
        const input = document.getElementById('input')
        let data = []
        try {
            input.addEventListener('change', () => {
                readXlsxFile(input.files[0]).then((rows) => {
                    rows.map((row, key) => {
                        if (key > 0) {
                            data.push({
                                razon_social: row[0],
                                nit: row[1],
                                codigo: row[2],
                                alias: row[3],
                                telefono: row[4],
                                correo: row[5],
                                direccion: row[6],
                               
                            })
                        }
                    })

                }).finally(() => {
                    datos.rows = data
                    this.setState({
                        datos,
                        tabla: true
                    })
                })
            })
        } catch (error) { }
    }

    render() {
        const { datos, tabla } = this.state
        return (
            <div>
                {tabla
                    ?
                    <AreaTabla Datos={datos}/>
                    
                    :

                    <input
                        type="file"
                        id="input"
                        className='CargarTabla'
                        onClick={this.cargarAccion.bind(this)}
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                    />
                }

                
            </div>

        )
    }
}



export default EMPRESA