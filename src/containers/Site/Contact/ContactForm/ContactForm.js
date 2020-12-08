import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const ContactForm = (props) => {
    return (
        <div>
           <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label><Badge variant="warning">(min 5 caractères)</Badge>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label><Badge variant="warning">(entre 100 et 200 caractères)</Badge>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form> 
        </div>
    )
}

export default ContactForm
