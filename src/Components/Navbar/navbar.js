import React from 'react';
import useScrollYOffset from '../../Hooks/useScrollYOffset';

import styles from './navbar.module.scss';
import {SidebarToggle} from '../Sidebar';

const Navbar = () => {
  const position = useScrollYOffset();

  return (
    <div className={`${styles.Navbar} ${position && styles.white}`}>
      <div className={styles.content}>
        <SidebarToggle color={position ? 'black' : 'white'} />
      </div>
    </div>
    )
}

export default Navbar;