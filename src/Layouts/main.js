import React, { useState } from 'react';

import {Navbar} from '../Components/Navbar';
import {Sidebar, SidebarToggle} from '../Components/Sidebar'
import SidebarContext from '../Contexts/sidebar.context';

import styles from './main.module.scss';

const MainLayout = ({render}) => {
  const [sidebarState, updateSidebarState] = useState(false);

  const toggle = () => {
    updateSidebarState(!sidebarState);
  }

  return (
    <SidebarContext.Provider value={{sidebarState, toggle}}>
      <Navbar />
      <Sidebar />
      <div className={styles.MainLayoutContent}>
        {render}
        define([
          'require',
          'd
          d
          d
          d
          d
          
          d
          d
          d
          d
          d
          d
          d
          d'
        ], function(require, factory)
      </div>
    </SidebarContext.Provider>
  )
};

export default MainLayout;
