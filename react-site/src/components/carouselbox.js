import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import nhatrangImg from '../assets/nhatrang.jpg'
import nhatrang2Img from '../assets/nhatrang2.jpg'
import nhatrang3Img from '../assets/nhatrang3.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className='d-block w-100' src={nhatrangImg} alt='Nha Trang' />
          <Carousel.Caption>
            <h3>Nha Trang</h3>
            <p>Public beach</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={nhatrang2Img} alt='Nha Trang' />
          <Carousel.Caption>
            <h3>Nha Trang</h3>
            <p>Perfect vacation</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={nhatrang3Img} alt='Nha Trang' />
          <Carousel.Caption>
            <h3>Nha Trang</h3>
            <p>Amazing night life</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
