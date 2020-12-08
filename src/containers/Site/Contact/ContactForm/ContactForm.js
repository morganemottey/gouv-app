import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { withFormik } from 'formik'
import * as Yup from 'yup';

const ContactForm = (props) => {
    return (
        <div>
           <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label><Badge variant="warning">(min 5 caractères)</Badge>
                    <Form.Control 
                        type="nom" 
                        placeholder="Enter Nom"
                        name="nom" 
                        onChange={props.handleChange}
                        value={props.values.nom}
                        onBlur={props.handleBlur}
                        />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                {
                    props.touched.nom && props.errors.nom && <span className="text-danger">{props.errors.nom}</span> // permet d'afficher notre message d'erreur sous condition
                }
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label><Badge variant="warning">(entre 100 et 200 caractères)</Badge>
                    <Form.Control 
                        type="email" 
                        name="email"
                        placeholder="Email" 
                        onChange={props.handleChange}
                        value={props.values.email}
                        onBlur={props.handleBlur}
                        />
                {
                    props.touched.email && props.errors.email && <span className="text-danger">{props.errors.email}</span>
                }
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label><Badge variant="warning">(entre 100 et 200 caractères)</Badge>
                    <Form.Control 
                        as="textarea"
                        rows="3"
                        name="message" 
                        onChange={props.handleChange} //permet de pouvoir changer notre value
                        value={props.values.message}     // valeur indispensable pour la validation de notre formulaire
                        onBlur={props.handleBlur} //permet d'avoir un focus sur les messages d'erreur inséré et analysé par Yup
                        />
                {
                    props.touched.message && props.errors.message && <span className="text-danger">{props.errors.message}</span>
                }
                </Form.Group>
                <Button variant="primary" onClick={props.handleSubmit}>
                    Submit
                </Button>
                </Form> 
        </div>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        nom: '',
        email: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        nom: Yup.string()
            .min(5, 'Le nom doit avoir plus de 5 caractères')
            .required('Le nom est obligatoire'),
        email: Yup.string()
            .min(100, 'Le format est incorrect')
            .required('L\'email est obligatoire'),
        message: Yup.string()
            .min(100, 'Le message doit faire plus de 100 caractères')
            .max(500, 'Le message doit dépasser 500 caractères')
            .required('Le message est obligatoire !')
    }),
    handleSubmit: (values, {props}) => {
        alert('Message')
    }
})(ContactForm)
