import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: '500px', marginTop: 70 }}>
        <h1 className='text-center'>Contact us</h1>
        <Form>
          <Form.Group controlId='FormBasicEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text>
              We will never share your email with anyone else
            </Form.Text>
          </Form.Group>

          <Form.Group controlId='FormBasicPassword'>
            <Form.Label>Write your request below</Form.Label>
            <Form.Control
              as='textarea'
              rows='3'
              placeholder='Ask anything here'
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    )
  }
}
