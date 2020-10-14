import React from 'react';

import {MainLayout} from './Layouts';
import {HomePage} from './Pages';

const App = () => (
  <MainLayout render={<HomePage />}/>
)

export default App;