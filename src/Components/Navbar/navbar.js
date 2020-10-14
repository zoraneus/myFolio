import React from 'react';
import useScrollYOffset from '../../Hooks/useScrollYOffset';

import styles from './navbar.module.scss';
import {SidebarToggle} from '../Sidebar';

const Navbar = () => {
  const position = useScrollYOffset();

  return (
    <div className={`${styles.Navbar} ${position && styles.white}`}>
      <SidebarToggle />
    </div>
    )
}

export default Navbar;