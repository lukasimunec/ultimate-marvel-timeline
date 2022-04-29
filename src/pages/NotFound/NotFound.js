import React from 'react';

import { Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NotFound = () => {
  return (
    <Container fluid='md' className='mt-5'>
      <Row>
        <Col>
          <div className='card'>
            <div className='card-header'>404</div>
            <div className='card-body'>
              <h5 className='card-title'>Are you lost?</h5>
              <p className='card-text'>
                This page is not found on our server.
              </p>
              <LinkContainer to='/'>
                <button className='btn btn-warning'>Home</button>
              </LinkContainer>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
