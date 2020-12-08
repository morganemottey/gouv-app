import React, { Component } from 'react'
import Titre from '../../../components/Titre/Titre'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import ContactForm from './ContactForm/ContactForm'
import { Route } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Titre>Formulaire de contacct</Titre>
                <div className>
                    <h2>Adresse : </h2>
                    XXX XXX XXX XXX
                    <h2>Téléphone : </h2>
                    00 00 00 00 00 00
                </div>
                <h2>Vous préférez nous écrire ?</h2>
                <LinkContainer to={this.props.match.path + '/form'}>
                    <Button variant="primary" type="submit">Formulaire de contact</Button>
                </LinkContainer>
                <Route path={this.props.match.path + '/form'} render={() => <ContactForm/>}/>
            </div>
        )
    }
}
