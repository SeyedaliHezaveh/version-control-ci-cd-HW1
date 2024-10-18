// App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList';

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
