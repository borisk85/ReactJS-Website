import React, { Component } from 'react'
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap'
import nhatrang4Img from '../assets/nhatrang4.jpg'
import nhatrang5Img from '../assets/nhatrang5.jpg'
import nhatrang6Img from '../assets/nhatrang6.jpg'

export default class About extends Component {
  render() {
    return (
      <Container style={{ marginTop: 30 }}>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-5'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Beaches</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>City</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Markets</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content style={{ marginTop: 48 }}>
                <Tab.Pane eventKey='first'>
                  <img src={nhatrang4Img} />
                  <p style={{ marginTop: 15, width: 785 }}>
                    Nha Trang beaches are spread out around the beach resort
                    city, offering a myriad of sightseeing and recreational
                    activities for visitors looking to soak up the sun during
                    their holiday. No two beaches are the same in Nha Trang,
                    ranging from the bustling Tran Phu Beach for travellers who
                    want to be in the centre of all the action to the more
                    remote Bai Dai Beach that is great for when you want to
                    escape the often overcrowded city.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src={nhatrang5Img} />
                  <p style={{ marginTop: 15, width: 805 }}>
                    Nha Trang is well known for its beaches and scuba diving and
                    has developed into a popular destination for international
                    tourists, attracting large numbers of backpackers, as well
                    as more affluent travelers on the south-east Asia circuit;
                    it is already very popular with Vietnamese tourists, with
                    Nha Trang Bay widely considered as among the world's most
                    beautiful bays.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src={nhatrang6Img} />
                  <p style={{ marginTop: 15, width: 805 }}>
                    When it comes to street markets in the popular coastal town,
                    Nha Trang Market is hailed as the busiest of its kind. Open
                    as early as 04:00 until 18:00 every day, local craftsmen,
                    farmers and fishermen gather to sell an extensive array of
                    handmade clothes, trinkets, seafood, fresh produce, and
                    packaged goods to locals and tourists. Trading since 1974,
                    Nha Trang Market’s bustling atmosphere and colourful array
                    of goods makes it a popular spot for travelling
                    photographers and tourists looking to immerse themselves in
                    the local culture.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
