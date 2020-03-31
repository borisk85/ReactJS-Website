import React, { Component } from 'react'
import { Container, Media, Col, Row, ListGroup, Card } from 'react-bootstrap'
import blogImg from '../assets/blogpost.png'

export default class Blog extends Component {
  render() {
    return (
      <Container style={{ marginTop: 65, marginLeft: 35 }}>
        <Row>
          <Col md='9'>
            <Media className='mt-4'>
              <img width={150} height={150} className='mr-3' src={blogImg} />
              <Media.Body>
                <h5>Blog post #1</h5>
                <p>Sample blog post text</p>
              </Media.Body>
            </Media>
            <Media className='mt-4'>
              <img width={150} height={150} className='mr-3' src={blogImg} />
              <Media.Body>
                <h5>Blog post #2</h5>
                <p>Sample blog post text</p>
              </Media.Body>
            </Media>
            <Media className='mt-4'>
              <img width={150} height={150} className='mr-3' src={blogImg} />
              <Media.Body>
                <h5>Blog post #3</h5>
                <p>Sample blog post text</p>
              </Media.Body>
            </Media>
          </Col>
          <Col md='3'>
            <h5 className='text-center mt-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Housing</ListGroup.Item>
                <ListGroup.Item>Visas</ListGroup.Item>
                <ListGroup.Item>Flights</ListGroup.Item>
                <ListGroup.Item>Rentals</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
