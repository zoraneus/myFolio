import React from 'react';
import styles from './technoCard.module.scss';

const TechnoCard = (props) => (
  <div className={styles.technoCard}>
    {props.children}
  </div>
)

export default TechnoCard;