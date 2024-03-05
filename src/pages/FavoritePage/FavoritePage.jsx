import { ShopListItem } from 'components/ShopListItem/ShopListItem';
import products from '../../medicines.json';
import { ProductListFavorites } from 'pages/ShopPage/ShopPage.styled';

const FavoritePage = ({ favorites, setFavorites, handleAddToOrder }) => {
  return (
    <ProductListFavorites>
      {favorites.map(product => (
        <ShopListItem
          key={product.id}
          product={product}
          products={products}
          favorites={favorites}
          setFavorites={setFavorites}
          handleAddToOrder={handleAddToOrder}
        />
      ))}
    </ProductListFavorites>
  );
};

export default FavoritePage;
