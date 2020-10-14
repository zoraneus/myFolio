import React from 'react';
import styles from './navbar.module.scss';
import {SidebarToggle} from '../Sidebar';

const Navbar = () => (
  <div className={`${styles.Navbar} ${window.pageYOffset && styles.white}`}>
    <SidebarToggle />
  </div>
)

export default Navbar;