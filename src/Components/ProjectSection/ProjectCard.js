import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({to, img, title, technology, children}) => (
  <div className={styles.ProjectCard}>
    <img src={img} />
    <div className={styles.overlay}>
      <h3>{title}</h3>
      <p className={styles.technology}>{technology}</p>
      <span className={styles.description}>
        {typeof(children) === 'array' ? 
          children.map(child => (
            <>{child}</>
          ))
          :
          <>{children}</>
        }
      </span>
    </div>
  </div>
);

export default ProjectCard;