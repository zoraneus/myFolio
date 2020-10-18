import React from 'react';
import SidebarContext from '../../Contexts/sidebar.context';
import styles from './sidebarToggle.module.scss';


const SidebarToggle = ({color}) => (
  <SidebarContext.Consumer>
    {({sidebarState, toggle}) => (
      <span className={styles.SidebarToggle} onClick={toggle} >
        <div style={{backgroundColor: color}}></div>
        <div style={{backgroundColor: color}}></div>
        <div style={{backgroundColor: color}}></div>
      </span>
    )}
  </SidebarContext.Consumer>
)

SidebarToggle.defaultProps = {
  color: 'black'
};

export default SidebarToggle;