import SharedLayOut from 'components/SharedLayOut/SharedLayOut';
import ShopPage from 'pages/ShopPage/ShopPage';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const shops = [
  { id: '1', name: '911' },
  { id: '2', name: 'Social pharmacy' },
  { id: '3', name: 'Pharmacy 3' },
  { id: '4', name: 'Pharmacy 4' },
];

const products = [
  {
    id: 1,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 2,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 3,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 4,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 5,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 6,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
  {
    id: 7,
    name: 'analgin',
    price: 10,
    description: 'iwsadfhskdjnbkxffnvbszldv',
  },
];

export const App = () => {
  const [orders, setOrders] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const handleAddToOrder = (product, id) => {
    const isProductInOrder = orders.find(product => product.id === id);
    if (!isProductInOrder) {
      setOrders(prevOrders => [...prevOrders, { ...product, quantity: 1 }]);
    } else {
      const product = orders.find(product => product.id === id);
      const updatedQuantity = orders.map(item => {
        if (product.id === item.id) {
          return { ...item, quantity: (item.quantity += 1) };
        }

        return item;
      });
      setOrders(updatedQuantity);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route
          index
          element={
            <ShopPage
              handleAddToOrder={handleAddToOrder}
              products={products}
              shops={shops}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={<ShoppingCartPage orders={orders} setOrders={setOrders} />}
        />
        <Route path="/favorites" element={<h2>Favorites</h2>} />
        <Route path="*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
