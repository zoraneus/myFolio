import React from 'react';
import styles from './baneer.module.scss';

const Baneer = (props) => (
  <div className={styles.Baneer}>
    <div className={styles.content}>
      {props.children}
    </div>
  </div>
)

export default Baneer;