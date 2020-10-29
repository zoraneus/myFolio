import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import styles from './clientSection.module.scss';

const ClientSection = ({children}) => (
  <div className={styles.clientSection}>
    <h2>Ils m'ont fait confiance</h2>
    <div class={styles.clientWrapper}>
      {children.map(child => (
        <>{child}</>
      ))}
    </div>
  </div>
)

export default ClientSection;