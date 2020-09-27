import React, { Component } from "react"
import Login from "./componentes/login"
import Routes from "./Routes/Routes"


class App extends Component {
    state = {
        estado: false
    }
    login = () => {
        this.setState({
            estado: true
        })
    }
    logout = () =>{
        this.setState({
            estado: false
        })
    }
    render() {
        const { estado } = this.state
        return (
            <div>

                {estado ?
                    <div>
                        {<input type='submit' value='Cerrar sesion' onClick={this.logout}/> }
                        <Routes />
                    </div>
                    : <Login Login={this.login}
                    />}
            </div>
        )
    }
}

export default App