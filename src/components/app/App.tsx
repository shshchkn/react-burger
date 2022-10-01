import React from 'react';
import logo from '../../logo.svg';
import app from './app.module.scss';

import AppHeader from '../header/Header';

function App() {
  return (
    <div className={app.wrapper}>
      <AppHeader />
      <main className={app.main}>
        Main content
      </main>
    </div>
  // <div className={app.app}>
  //   <header className={app.header}>
  //     <img src={logo} className={app.logo} alt="logo"/>
  //     <p>
  //       Edit <code>src/App.tsx</code> and save to reload.
  //     </p>
  //     <a
  //       className={app.link}
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     > Learn React </a>
  //   </header>
  // </div>
)
  ;
}

export default App;
