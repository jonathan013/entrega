import React, { Component } from "react"
import Panel from "../componentes/panel"
import CrearEmp from "../componentes/Empresa"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class Routes extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact component={Panel} />
                    <Route path='/Empresa' exact component={CrearEmp} />
                </Switch>
            </Router>
        )
    }
}

export default Routes