import React, { Component } from 'react'
import CarouselBox from '../components/carouselbox'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'
import clientImg from '../assets/client.jpg'
import client2Img from '../assets/client2.jpg'
import client3Img from '../assets/client3.jpg'
import client4Img from '../assets/client4.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Reviews</h2>
          <CardDeck className='m-4'>
            <Card bg='light'>
              <Card.Img variant='top' src={clientImg} />
              <Card.Body className='text-center'>
                <Card.Title>David</Card.Title>
                <Card.Text>
                  "Great service! Was my best trip to Nha Trang! Thank you
                  guys!"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg='light'>
              <Card.Img variant='top' src={client2Img} />
              <Card.Body className='text-center'>
                <Card.Title>Julia</Card.Title>
                <Card.Text>
                  "I can recommend this service to anyone willing to visit Nha
                  trang city! Best team out there."
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg='light'>
              <Card.Img variant='top' src={client3Img} />
              <Card.Body className='text-center'>
                <Card.Title>Mary</Card.Title>
                <Card.Text>
                  "Me and my husband enjoyed our time in Nha Trang, thank you!"
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg='light'>
              <Card.Img variant='top' src={client4Img} />
              <Card.Body className='text-center'>
                <Card.Title>John</Card.Title>
                <Card.Text>
                  "Nha Trang is great and company helped me a lot! Will come
                  back later again!"
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    )
  }
}
