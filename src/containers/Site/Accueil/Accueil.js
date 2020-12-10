import React, { Component } from 'react'
import Titre from '../../../components/Titre/Titre'
import background from '../../../assets/images/carte_et_donnees.jpg'
import './Accueil.css'

export default class Accueil extends Component {
    render() {
        return (
            <div>
                <Titre>Carte et Données</Titre>
                <div className="">
                    <img src={background} alt="background"/>
                </div>
            </div>
        )
    }
}
