import React, { Component } from 'react'
import "./style/login.css"
import logo from "./picture/logo.png"

class Login extends Component {
    state = {
        usuario: '',
        password: '',
        ConfirUser: 'jonas',
        ConfirPass: '123'
    }
    Obtdatos = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })


    }
    Iniciar = () => {
        const { usuario, password, ConfirUser, ConfirPass } = this.state
        if (usuario === ConfirUser && password === ConfirPass) {
            this.props.Login()
        }
    }
    render() {
        return (
            <div className='cuerpo'>
                <div className='presentacion'>
                    <div className='cont-log'>
                        <img src={logo} className='logo' alt='logo' />
                    </div>
                </div>
                <div className="cont-login">

                    <form className='login' onSubmit={this.Iniciar}>
                        <h1 className='titulo'>INICIAR SESIÓN</h1>
                        <div>
                            <label>Ingrese usuario</label><br />
                            <input type='text' name='usuario' className='input-Form' onChange={this.Obtdatos} />
                        </div>
                        <div>
                            <label>Ingrese contraseña</label><br />
                            <input type='password' name='password' className='input-Form' onChange={this.Obtdatos} />
                        </div>
                        <div>
                            <input type='submit' className='btn-iniciar' value='INICIAR' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login