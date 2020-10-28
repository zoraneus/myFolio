import React from 'react';
import styles from './timeline.module.scss';
import { Timeline as MTimeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Timeline = () => (
  <div className={styles.timeline}>
    
    <h2>Timeline</h2>
    <MTimeline lineColor={'#ddd'}>
    <TimelineItem
        key="001"
        dateText="10/2018 – Aujourd'hui"
        style={{ color: '#e86971' }}
      >
        <h3>Epitech Rennes (2e année)</h3>
        <h5>Expert en technologie de l'information. (bac +5)</h5>
        <p>
          <strong>Programmation en language C et C++</strong>, utilisant des outils et méthodes professionnelles
          (git, trello, UML, ...). Procurant une forte adaptabilité à tous les languages et l'intégration rapide en entreprise.
        </p>
        <p>
          <strong>Stage de 6 mois</strong> en entreprise chez Argosoft. Programmation en react.js / PHP
          d'un dashboard/backoffice from scratch utilisant l'API wordpress et l'architecture REST. 
          Ainsi que des scripts d'automatisation en node.js et la mise en place de CI/CD (voir Projets)
        </p>
        <p>
          <strong>Référent au Fab Lab</strong> d'Epitech Rennes dans le domaine de l'électronique, impression 3d
          et nouvelles technologies. 
        </p>
        <p>
          <strong>Membre bureau et référent IT</strong> chez E-mma. Une fondation ayant pour but de promouvoir la
          mixité dans le domaine du numérique et participe également à des initiations à la programmation
          en partenariat avec les ateliers numériques Google de Rennes.
        </p>
        <p>
          <strong>Membre des Cobra</strong>: une branche d'Epitech intervenant pour initier les collégiens et lycéens
          à la programmation. nottamment en language C
        </p>
      </TimelineItem>
    <TimelineItem
        key="002"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>Lycée Colbert (Lorient)</h3>
        <h5>Bac STI2D SIN, Mention Bien</h5>
        <p>
          <strong>Projet de fin d'année</strong>: Création d'une porte contrôlé par RFID
          pour les personnes en situation de handicap. Utilisation d'arduino (language C++)
          et création d'un protocole de communication sans fil ainsi qu'une étude de sécurité
          réseau. (Voir projets)
        </p>
        <p>
          <strong>Cofondateur du club informatique</strong>: initiation au language C++ avec la librairie Qt,
          administrateur réseau (mise en place d'un serveur, sécurisation des comptes, ...).
          Pentesting avec kali linux de ce réseau (wireshark, metasploit, ...).
          <br></br>
          Création d'un site web de gestion de bibliothèque pour le club manga (HTML/PHP/SQL)
        </p>
      </TimelineItem>
    </MTimeline>
  </div>
)

export default Timeline;