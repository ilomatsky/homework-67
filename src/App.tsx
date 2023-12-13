import React from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import Keyboard from './components/Keyboard/Keyboard';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Keyboard/>
    </Provider>
  );
};

export default App;
