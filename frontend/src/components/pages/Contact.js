import React from 'react'
import Container from 'react-bootstrap/Container'
import {Card,Row,Col} from 'react-bootstrap'
export const Contact = () => {
    return (
        <Container>
            <h3 className="font-weight-bold mb-5">If you require any further information, feel free to contact us.</h3>
            <Row>
                <Col xl="6">
                <Card style={{width:'400px',backgroundColor:'transparent'}}>
  <Card.Header  className="text-center font-weight-bold">Pranjal Vashney</Card.Header>
  <Card.Body>
    <Card.Text className="text-left">
      Email: <a href="mailto:17ics063@gbu.ac.in">17ics063@gbu.ac.in</a>
      <br></br>
      Phone: <a href="tel:+919990173829">+91-9990173829</a>
    </Card.Text>
  </Card.Body>
 
</Card>
                </Col>
                <Col xl="6">
                <Card style={{width:'400px',backgroundColor:'transparent'}}>
  <Card.Header className="text-center font-weight-bold">Mukul Rai</Card.Header>
  <Card.Body>
    <Card.Text className="text-left">
      Email: <a href="mailto:17ics055@gbu.ac.in">17ics055@gbu.ac.in</a>
      <br></br>
      Phone: <a href="tel:+918210646956">+91-8210646956</a>
    </Card.Text>
  </Card.Body>
 
</Card>
                </Col>
            </Row>
        </Container>
       )
    }
    