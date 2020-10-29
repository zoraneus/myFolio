import React from 'react';
import styles from './ProjectSection.module.scss';

const ProjectSection = ({children}) => (
  <div className={styles.ProjectSection}>
    <h2>Portfolio</h2>
    <div className={styles.projectWrapper}>
      {typeof(children) === 'array' ? 
        children.map(child => (
          <>{child}</>
        ))
        :
        <>{children}</>
      }
    </div>
  </div>
)

export default ProjectSection;