import React from 'react'
import Card from 'react-bootstrap/Card'
import Horaires from '../Horaires/Horaires'

const Etablissement = (props) => {
    return (
        <div>
            <Card>
            <Card.Header as="h5">{props.nom}</Card.Header>
            <Card.Body>
                <Card.Title>Telephone: {props.telephone}<br></br>
                {props.mail && `Mail : ${props.mail}`}
                </Card.Title>
                <Card.Text>
                <strong>Adresse : </strong><br></br>
                {props.adresses[0].lignes[0]}
                {props.adresses[0].codePostal} - {props.adresses[0].commune}
                <br></br>
                <strong>Horaire : </strong><br></br>
                {props.horaires && <Horaires horaires={props.horaires}/>}
                <br></br>
                {props.url && <a href={props.url} className="btn btn-info">Visiter le site web !</a>}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Etablissement
