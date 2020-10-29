import React from 'react';

import {MainLayout} from './Layouts';
import {HomePage} from './Pages';
import './app.scss';

const App = () => (
  <MainLayout render={<HomePage />}/>
)

export default App;