import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Titre from '../../../components/Titre/Titre'
import axios from 'axios'
import Etablissement from './Etablissement/Etablissement'
import './Localisation.css'

export default class Localisation extends Component {
    state = {
        recherche : null
    }
    rechercheEtablissement = (type) => {
        axios.get(`https://etablissements-publics.api.gouv.fr/v3/departements/09/${type}`)
        .then(reponse => {
            console.log(reponse.data)
            this.setState({recherche: reponse.data.features})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
               <div className="container_page">
                   <Titre>Les établissements</Titre>
                   <div className="container_button">
                        <Button className="bouton" variant="secondary" onClick={() => this.rechercheEtablissement('mairie')}>Mairie</Button>
                        <Button className="bouton" variant="secondary" onClick={() => this.rechercheEtablissement('commissariat_police')}>Commissariat de Police</Button>
                        <Button className="bouton" variant="secondary" onClick={() => this.rechercheEtablissement('pole_emploi')}>Pole Emploi</Button>
                        <Button className="bouton" variant="secondary" onClick={() => this.rechercheEtablissement('prefecture')}>Préfecture</Button>
                    </div>
                    <div className="container_list_etablissement">
                   {this.state.recherche && this.state.recherche.map(etablissement => {
                       return <div><Etablissement
                                        adresses={etablissement.properties.adresses}
                                        horaires={etablissement.properties.horaires}
                                        id={etablissement.properties.id}
                                        nom={etablissement.properties.nom}
                                        telephone={etablissement.properties.telephone}
                                        mail={etablissement.properties.mail}
                                        url={etablissement.properties.url}
                                    /></div>
                   })}
                   </div>
               </div>
            </div>
        )
    }
}
