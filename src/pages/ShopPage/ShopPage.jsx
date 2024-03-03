import { ListsBox, ProductList, ShopList } from './ShopPage.styled';

import { ShopListItem } from 'components/ShopListItem/ShopListItem';

const ShopPage = ({
  handleAddToOrder,
  products,
  shops,
  setFavorites,
  favorites,
}) => {
  //   const favoritesId = favorites.map(fav => fav.id);
  //   console.log(favoritesId);
  //   const favoritesProducts = products.filter(prod => {
  //     return favorites.map(element => prod.id === element.id);
  //   });
  //   console.log(favoritesProducts);

  //   const otherProducts = products.filter(
  //     (prod, i) => prod.id !== favorites[0].id
  //   );
  //   console.log(otherProducts);

  //   const sortedProducts = [...favoritesProducts, ...otherProducts];

  //   console.log(sortedProducts);

  return (
    <div>
      <h1>Shop Page</h1>
      <ListsBox>
        <ShopList>
          {shops.map(shop => (
            <li key={shop.id}>{shop.name}</li>
          ))}
        </ShopList>
        <ProductList>
          {products.map(product => (
            <ShopListItem
              key={product.id}
              product={product}
              products={products}
              favorites={favorites}
              setFavorites={setFavorites}
              handleAddToOrder={handleAddToOrder}
            />
          ))}
        </ProductList>
      </ListsBox>
    </div>
  );
};

export default ShopPage;
