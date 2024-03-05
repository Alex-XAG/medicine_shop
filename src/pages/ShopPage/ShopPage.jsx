import {
  ListsBox,
  ProductList,
  ShopItem,
  ShopList,
  ShopPageBox,
} from './ShopPage.styled';

import { ShopListItem } from 'components/ShopListItem/ShopListItem';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ShopPage = ({ handleAddToOrder, setFavorites, favorites }) => {
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected] = useState([...products]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios
          .get('https://medicines-reader-backend.onrender.com/medicines')
          .then(res => {
            setProducts(res.data);
            return res.data;
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    handleFilter('911');
  }, [products]);

  const shops = products
    .map(prod => prod.shop)
    .filter((prod, i, arr) => arr.indexOf(prod) === i);

  function handleFilter(shop) {
    const filteredProducts = products.filter(prod => prod.shop === shop);
    setProductsSelected(filteredProducts);
  }

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
