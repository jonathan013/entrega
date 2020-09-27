import React, { Component } from "react"
import Agregar from "./Agregar"
import Empresa from "../tablas"
import "./css/botones.css"
import EMPRESA from "../tablas"

class CrearEmpre extends Component {
    state = {
        crear: false
    }
    crearEmp = () => {
        const { crear } = this.state
        if (crear) {
            this.setState({
                crear: false
            })
        } else {
            this.setState({
                crear: true
            })
        }
    }
    render() {
        const { crear } = this.state
        return (
            <div>
                <div className='CrearCont'>
                    <button className='crear' onClick={this.crearEmp}>Crear Empresa</button>
                    {crear ?
                        <div>
                            <div  className='agregar-Proc'>
                            <EMPRESA />
                            <Agregar />
                            </div>
                          
                            
                        </div>
                        
                        : ''}
                </div>
                
            </div>
        )
    }
}

export default CrearEmpre