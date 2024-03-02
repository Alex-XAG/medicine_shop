import { useState } from 'react';
import {
  ListsBox,
  ProductList,
  ShopList,
  ShopListArticle,
  SvgHeart,
} from './ShopPage.styled';
import sprite from '../../sprite.svg';

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

const ShopPage = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    // if (!isCarInFavorites) {
    //   const car = allCars.find(car => car.id === carId);
    //   setFavorites(prevFavorites => [...prevFavorites, car]);
    // } else {
    //   const updatedFavorites = favorites.filter(car => car.id !== carId);
    //   setFavorites(updatedFavorites);
    // }

    setIsFavorite(!isFavorite);
  };

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
            <li key={product.id}>
              <ShopListArticle>
                <SvgHeart
                  width={20}
                  height={20}
                  style={isFavorite ? { fill: 'blue' } : { fill: 'none' }}
                  onClick={() => toggleFavorite()}
                >
                  <use href={`${sprite}#icon-heart`}></use>
                </SvgHeart>
                <h3>{product.name}</h3>
                <img href="/" alt="Medicine" width={200} height={100} />
                <p>{product.price}$</p>
                <p>{product.description}</p>
                <button type="button">Add to shopping cart</button>
              </ShopListArticle>
            </li>
          ))}
        </ProductList>
      </ListsBox>
    </div>
  );
};

export default ShopPage;
