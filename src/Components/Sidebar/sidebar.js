import React from 'react'
import styles from './sidebar.module.scss';
import SidebarContext from '../../Contexts/sidebar.context';
import {Link} from 'react-scroll';

function Sidebar() {
  return (
    <SidebarContext.Consumer>
       {({sidebarState, toggle}) => (
        <>
          <div onClick={toggle} className={`${styles.SidebarOverlay} ${sidebarState && styles.on}`}>
          </div>
          <div className={`${styles.Sidebar} ${sidebarState ? styles.on : ''}`}>
            <Link onClick={() => toggle()} smooth={true} offset={-70} to='technology'>Technologies</Link>
            <Link onClick={() => toggle()} smooth={true} offset={-70} to='clients'>Clients</Link>
            <Link onClick={() => toggle()} smooth={true} offset={-70} to='timeline'>Timeline</Link>
            <Link onClick={() => toggle()} smooth={true} offset={-70} to='portfolio'>Portfolio</Link>
            <Link onClick={() => toggle()} smooth={true} offset={-70} to='contact'>Contact</Link>
          </div>
        </>
       )}
    </SidebarContext.Consumer>
  )
}

export default Sidebar;