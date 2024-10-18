import React from 'react';

const items = ['Item 4', 'Item 3', 'Item 2', 'Item 1'];

const ItemList = () => {
  return (
    <main>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </main>
  );
};

export default ItemList;