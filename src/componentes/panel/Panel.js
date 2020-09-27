import React, { Component } from "react"
import "./css/panel.css"
import { Link } from "react-router-dom"

class Panel extends Component {
    state = {
        nombre: "Jonatan Peña"
    }
    render() {
        const { nombre } = this.state
        return (
            <div>
                <div className='contPanel'>
                    <div className='imgFoto'>

                    </div>
                    <div className='Cont-nombre'>
                        <h3>{nombre}</h3>
                    </div>
                    <div className='Contenedor-opciones'>
                        <ul className='opciones'>
                            <li className='link'><Link to='/Empresa' className='direcc'>Crear Empresa</Link></li>
                            <li className='link'>Ingresar producto</li>
                            <li className='link'>Mirar estadisdicas</li>
                            <li className='link'>Realizar venta</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Panel