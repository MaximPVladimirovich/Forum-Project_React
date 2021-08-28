import React from 'react';
import styles from './App.module.css';
import { Header } from './Components/Header'
import { HomePage } from './Pages/HomePage'

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;


