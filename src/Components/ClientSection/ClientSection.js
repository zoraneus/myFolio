import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styles from './clientSection.module.scss';

const ClientSection = ({children}) => (
  <div className={styles.clientSection}>
    <h2>Ils m'ont fait confiance</h2>
    <Container fluid>
      <Row>
        {children.map(child => (
          <Col lg={3} md={6} sm={12}>
            {child}
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)

export default ClientSection;