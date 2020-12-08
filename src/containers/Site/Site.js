import React, { Component } from 'react'
import Accueil from './Accueil/Accueil'
import Localisation from './Localisation/Localisation'
import Contact from './Contact/Contact'
import NavBar from '../../components/NavBar/NavBar'
import { Route } from "react-router-dom";

export default class Site extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Route path="/" exact render={() => <Accueil/>}/>
                <Route path="/localisation" render={() => <Localisation/>}/>
                <Route path="/contact" render={() => <Contact/>}/>
            </div>
        )
    }
}
