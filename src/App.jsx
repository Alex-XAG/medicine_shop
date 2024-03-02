import SharedLayOut from 'components/SharedLayOut/SharedLayOut';
import ShopPage from 'pages/ShopPage/ShopPage';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route index element={<ShopPage />} />
        <Route path="/shopping-cart" element={<h2>Shopping Cart</h2>} />
        <Route path="/favorites" element={<h2>Favorites</h2>} />
        <Route path="*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
};
