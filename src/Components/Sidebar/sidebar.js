import React from 'react'
import styles from './sidebar.module.scss';
import SidebarContext from '../../Contexts/sidebar.context';

function Sidebar() {
  return (
    <SidebarContext.Consumer>
       {({sidebarState, toggle}) => (
        <>
          <div onClick={toggle} className={`${styles.SidebarOverlay} ${sidebarState && styles.on}`}>
          </div>
          <div className={`${styles.Sidebar} ${sidebarState ? styles.on : ''}`}>
            &nbsp;
          </div>
        </>
       )}
    </SidebarContext.Consumer>
  )
}

export default Sidebar;