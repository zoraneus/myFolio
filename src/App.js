import React from 'react';
import {Sidebar, SidebarToggle} from './Sidebar';
import styles from './app.module.scss';

function App() {
  return (
    <>
      <SidebarToggle />
      <Sidebar />
    </>
  );
}

export default App;
