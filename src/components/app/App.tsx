import React from 'react';
import app from './app.module.scss';
import AppHeader from '../header/Header';

const App = () => {
  return (
    <div className={app.wrapper}>
      <AppHeader/>
      <main className={app.main}>
        Main content
      </main>
    </div>
  );
}

export default App;
