import SharedLayOut from 'components/SharedLayOut/SharedLayOut';
import FavoritePage from 'pages/FavoritePage/FavoritePage';
import ShopPage from 'pages/ShopPage/ShopPage';
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { nanoid } from 'nanoid';
import HistoryPage from 'pages/HistoryPage/HistoryPage';
import { useEffect } from 'react';

export const App = () => {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem('orders')) || []
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );
  const [orderHistory, setOrderHistory] = useState(
    JSON.parse(localStorage.getItem('orderHistory')) || []
  );

  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  }, [orderHistory]);

  const onSubmit = (inputName, inputPhone, inputEmail, inputAddress) => {
    setOrderHistory(prevOrder => [
      ...prevOrder,
      createOrder({
        name: inputName,
        phone: inputPhone,
        email: inputEmail,
        address: inputAddress,
        order: [...orders],
      }),
    ]);
  };

  const createOrder = data => {
    const newOrder = {
      ...data,
      id: nanoid(),
    };
    return newOrder;
  };

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
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCartPage
              orders={orders}
              setOrders={setOrders}
              onSubmit={onSubmit}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritePage
              favorites={favorites}
              handleAddToOrder={handleAddToOrder}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/history"
          element={<HistoryPage orderHistory={orderHistory} />}
        />
        <Route path="*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
