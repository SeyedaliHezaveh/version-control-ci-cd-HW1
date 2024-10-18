// App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemList from './components/ItemList/ItemList';

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
