import React from 'react';
import './App.css';
import WelcomeText from './WelcomeText';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

function App() {
  return (
    <AppLayout>
      <AppBar />
      <WelcomeText />
    </AppLayout>
  );
}

export default App;
