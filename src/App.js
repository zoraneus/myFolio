import React, { useState } from 'react';

import {Sidebar, SidebarToggle} from './Components/Sidebar'
import SidebarContext from './Contexts/sidebar.context';

const App = () => {
  const [sidebarState, updateSidebarState] = useState(false);

  const toggle = () => {
    updateSidebarState(!sidebarState);
  }

  return (
    <SidebarContext.Provider value={{sidebarState, toggle}}>
      <SidebarToggle />
      <Sidebar />
    </SidebarContext.Provider>
  )
};

export default App;
