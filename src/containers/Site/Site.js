import React, { Component } from 'react'
import Accueil from './Accueil/Accueil'
import Localisation from './Localisation/Localisation'
import Contact from './Contact/Contact'
import NavBar from '../../components/NavBar/NavBar'
import { Route, Switch } from "react-router-dom";
// import Container from 'react-bootstrap/Container'
import Footer from '../../components/Footer/Footer'
import Erreur from '../../components/Erreur/Erreur'
import Erreur404 from '../../components/Erreur/Erreur404/Erreur404'

export default class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
            <NavBar/>
                <Switch>
                    <Route path="/" exact render={() => <Accueil/>}/>
                    <Route path="/localisation" render={() => <Localisation/>}/>
                    <Route path="/contact" render={(props) => <Contact {...props}/>}/>
                    <Route render={() => <Erreur><Erreur404></Erreur404></Erreur>}/>
                </Switch>
            </div>
            <Footer/>
            </>
        )
    }
}
