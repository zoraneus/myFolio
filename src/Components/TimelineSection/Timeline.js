import React from 'react';
import styles from './timeline.module.scss';
import { Timeline as MTimeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const Timeline = () => (
  <div className={styles.timeline}>
    
    <h2>Timeline</h2>
    <MTimeline lineColor={'#ddd'}>
      <TimelineItem
        key="001"
        dateText="2020 -> aujourd'hui"
        style={{color: '#61b8ff'}}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
      >
        <h3>Epitech MSC</h3>
        <h5>étudiant à Rennes</h5>
        <p>
          Formation d'expert en technologie de l'information (bac +5)<br/>
          - plateforme web de recherche de travail "Jobboard" (React/Express.js)<br/>
          - plateforme mobile de monitoring de cryptomonnaie (React Native/express.js)
        </p>
      </TimelineItem>
      <TimelineItem
        key="002"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>Taker Junior Conseil</h3>
        <h5>Responsable régional & chef de projet</h5>
        <p>
          Gestion du pole Rennais de Taker (~10 membres) sur le modèle ESN<br/>
          développement web backend (PHP / Wordpress)
        </p>
      </TimelineItem>
      <TimelineItem
        key="003"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>Wisoftify</h3>
        <h5>CEO</h5>
        <p>
          Développement freelance fullstack en React/Sails.js et Ruby On Rails
        </p>
      </TimelineItem>
      <TimelineItem
        key="004"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>E-mma Rennes</h3>
        <h5>Responsable de la branche IT régionale</h5>
        <p>
          Gestion des équipes assurants les ateliers d'initiation à la programmation informatique (~60 membres)<br/>
          Conférences et ateliers en partenariat avec Google atelier numérique. (scratch/python/wordpress)
        </p>
      </TimelineItem>
      <TimelineItem
        key="005"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>Epitech PGE</h3>
        <h5>étudiant</h5>
        <p>
          apprentissage du C/C++ avec la pédagogie par projet:<br/>
          - 42sh (shell en C basé sur tcsh)<br/>
          - MyTeams (client/serveur de messagerie)<br/>
          - Indie Studio (bomber man en 3D, C++) <br/>
          stage 6 mois en développement web (React/wordpress) chez Argosoft
        </p>
      </TimelineItem>
      <TimelineItem
        key="006"
        dateText="09/2016 – 06/2018"
        style={{ color: '#61b8ff' }}
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}>
        <h3>Lycée Colbert (Lorient)</h3>
        <h5>étudiant STI2D SIN</h5>
        <p>
          - Projet de fin d'année en C (projet d'électronique arduino)<br/>
          - Co-fondateur du club informatique (création de TP C++/Qt et de cours d'initiation à la programmation pour débutants)
        </p>
      </TimelineItem>
    </MTimeline>
  </div>
)

export default Timeline;