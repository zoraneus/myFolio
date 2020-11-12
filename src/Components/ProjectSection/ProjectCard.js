import React, {useEffect, useState} from 'react';
import useWindowWidth from '../../Hooks/useWindowWidth';
import styles from './ProjectCard.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({to, img, title, technology, children}) => {
  const windowWidth = useWindowWidth();
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    if (windowWidth > 500)
      setModalState(false);
  })

  return (
    <>
    <div className={styles.ProjectCard} onClick={() => {if (windowWidth <= 500) setModalState(!modalState)}}>
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
    <div className={`${styles.ProjectCardModal} ${modalState && styles.is_open}`}>
      <div className={styles.content}>
        <div className={styles.body}>
          <FontAwesomeIcon className={styles.close} onClick={() => {setModalState(false)}} 
                           size='lg' icon={faTimesCircle} />
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
      <div className={styles.overlay}></div>
    </div>
    </>
  );
}

export default ProjectCard;