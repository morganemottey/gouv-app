import React, { Component } from 'react'
import Titre from '../../../components/Titre/Titre'
import background from '../../../assets/images/fond-blanc-elegant-lignes-brillantes_1017-17580.jpg'

export default class Accueil extends Component {
    render() {
        return (
            <div>
                <Titre>Town</Titre>
                <div className="container">
                    <img src={background} alt="background"/>
                </div>
            </div>
        )
    }
}
