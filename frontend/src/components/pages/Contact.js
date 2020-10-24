import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import './Contact.css'
export const Contact = () => {
  return (
    <div>
      <h3 className='my-5 font-weight-bold  contact'>
        For further queries, feel free to contact us.
      </h3>
      <Row className='mx-auto justify-content-center'>
        <Col xl='3'>
          <Card style={{ backgroundColor: 'transparent' }}>
            <Card.Header className='text-center font-weight-bold'>
              Pranjal Vashney
            </Card.Header>
            <Card.Body>
              <Card.Text className='text-left'>
                Email:{' '}
                <a href='mailto:17ics063@gbu.ac.in'>17ics063@gbu.ac.in</a>
                <br></br>
                Phone: <a href='tel:+919990173829'>+91-9990173829</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl='3'>
          <Card style={{ backgroundColor: 'transparent' }}>
            <Card.Header className='text-center font-weight-bold'>
              Mukul Rai
            </Card.Header>
            <Card.Body>
              <Card.Text className='text-left'>
                Email:{' '}
                <a href='mailto:17ics055@gbu.ac.in'>17ics055@gbu.ac.in</a>
                <br></br>
                Phone: <a href='tel:+918210646956'>+91-8210646956</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
