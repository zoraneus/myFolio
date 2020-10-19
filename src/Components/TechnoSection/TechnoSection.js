import React from 'react';
import styles from './technoSection.module.scss';
import {Container, Row, Col} from 'reactstrap';

const TechnoSection = (props) => (
  <div className={styles.technoSection}>
    <Container>
      <Row>
        {props.children.map((child) => (
          <Col lg={4} md={6} sm={12}>
            {child}
          </Col>
        ))}
      </Row>
    </Container>
  </div>
)

export default TechnoSection;