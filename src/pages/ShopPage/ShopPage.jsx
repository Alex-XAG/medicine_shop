import {
  ListsBox,
  ProductList,
  ShopItem,
  ShopList,
  ShopPageBox,
} from './ShopPage.styled';

import { ShopListItem } from 'components/ShopListItem/ShopListItem';
import products from '../../medicines.json';
import { useState } from 'react';
import { useEffect } from 'react';

const ShopPage = ({ handleAddToOrder, setFavorites, favorites }) => {
  const [productsSelected, setProductsSelected] = useState([...products]);
  useEffect(() => {
    handleFilter('911');
  }, []);
  const shops = products
    .map(prod => prod.shop)
    .filter((prod, i, arr) => arr.indexOf(prod) === i);

  function handleFilter(shop) {
    const filteredProducts = products.filter(prod => prod.shop === shop);
    setProductsSelected(filteredProducts);
  }

  // const filteredProducts = handleFilter();
  return (
    <ShopPageBox>
      <h1>Shop Page</h1>
      <ListsBox>
        <ShopList>
          {shops.map(shop => (
            <ShopItem
              key={shop}
              onClick={() => {
                console.log(handleFilter(shop));
                return handleFilter(shop);
              }}
            >
              {shop}
            </ShopItem>
          ))}
        </ShopList>
        <ProductList>
          {productsSelected.map(product => (
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
    </ShopPageBox>
  );
};

export default ShopPage;
