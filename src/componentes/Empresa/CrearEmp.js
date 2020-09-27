import React, { Component } from "react"
import Panel from "../panel"

import BotonCrear from "../botones/Crear"
import "./css/empresa.css"

class CrearEmp extends Component {
    
    render() {
        return (
            <div>
                <Panel />
                <div className='cont-CrearEmp'>
                    <div className='botones'>
                        <BotonCrear />
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default CrearEmp