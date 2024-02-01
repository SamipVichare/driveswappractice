'use client';
import { useState } from 'react';

import Header from '@/components/Header';
import Grocery from '@/components/Grocery';
import AddGroceryForm from '@/components/AddGroceryForm';
import Search from '@/components/Search';

import { LanguageContextProvider } from '@/context/LanguageContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [grocery, setGrocery] = useState([
    {
      name: 'Apple',
      quantity: 3,
      id: 1,
    },
    {
      name: 'Oranges',
      quantity: 2,
      id: 2,
    },
    {
      name: 'Cucumber',
      quantity: 4,
      id: 3,
    },
    {
      name: 'Potatos',
      quantity: 4,
      id: 4,
    },
  ]);

  const handleDelete = (id: number) => {
    setGrocery((currentGrocery) => currentGrocery.filter((g) => g.id !== id));
  };

  const handleAddGrocery = (name: string) => {
    setGrocery((prev) => [
      ...prev,
      {
        name: name,
        quantity: 0,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
  };

  const handleQuantityChange = (id: number, data: number) => {
    setGrocery((prev) =>
      prev.map((g) =>
        g.id === id
          ? {
              ...g,
              quantity:
                data > 0
                  ? g.quantity + data
                  : g.quantity > 0
                  ? g.quantity + data
                  : 0,
            }
          : g
      )
    );
  };
  return (
    <div>
      <LanguageContextProvider>
        <AddGroceryForm onAddGrocery={handleAddGrocery} />
        <Header title='Grocery List' totalItems={grocery.length}></Header>
        <Search onFilter={setSearchTerm} />
        {grocery
          .filter((t) =>
            t.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((g) => (
            <Grocery
              name={g.name}
              quantity={g.quantity}
              id={g.id}
              key={g.id}
              onDelete={handleDelete}
              onQuantityChange={handleQuantityChange}
            />
          ))}
      </LanguageContextProvider>
    </div>
  );
}

export default App;
