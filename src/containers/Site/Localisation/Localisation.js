import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Titre from '../../../components/Titre/Titre'

import axios from 'axios'

export default class Localisation extends Component {
    state = {
        recherche : null
    }
    recherche = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`)
        .then(reponse => {
            console.log(reponse.data)
            this.setState({recherche: reponse.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
               <div className>
                   <Titre></Titre>
                   <Button variant="secondary" onClick={() => this.recherche('mairie')}>Mairie</Button>
                   <Button variant="secondary" onClick={() => this.recherche('commissariat_police')}>Commissariat de Police</Button>
                   <Button variant="secondary" onClick={() => this.recherche('pole_emploi')}>Pole Emploi</Button>
                   <Button variant="secondary" onClick={() => this.recherche('prefecture')}>Préfecture</Button>
               </div>
            </div>
        )
    }
}
