// App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList/ItemList';
import './styles.css'
import './App.css'
import './index.css'

// Main application component
const App = () => {
  return (
    <div>
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
};

export default App;
