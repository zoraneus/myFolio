import React from 'react';
import styles from './baneer.module.scss';

const Baneer = () => (
  <div className={styles.Baneer}>
    <div className={styles.content}>
      <h1>Deviens un leader !</h1>
      <p>Captain Dev propose une offre d'accompagnement technique pour vos équipes. Un coaching pour les développeurs souhaitant devenir leader technique. Ainsi qu'une offre de formation en ligne.</p>
    </div>
  </div>
)

export default Baneer;