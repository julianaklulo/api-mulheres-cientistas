import React from 'react';
import CardList from './components/CardList';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <CardList />
      </div>
    </>
  );
}

export default App;