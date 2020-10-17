import React from 'react';
import SidebarContext from '../../Contexts/sidebar.context';

const SidebarToggle = ({}) => {
  return (
    <SidebarContext.Consumer>
      {({sidebarState, toggle}) => (
        <span onClick={toggle} style={{cursor: 'pointer'}}>
          X ({sidebarState ? 'true' : 'false'})
        </span>
      )}
    </SidebarContext.Consumer>
  )
}

export default SidebarToggle;