import { useState, useEffect } from 'react';
import {
  AddToShoppingCart,
  Description,
  Price,
  ProductItem,
  ShopListArticle,
  SvgHeart,
} from './ShopListItem.styled';
import sprite from '../../sprite.svg';

export const ShopListItem = ({
  product,
  favorites,
  setFavorites,
  products,
  handleAddToOrder,
}) => {
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const [isFavorite, setIsFavorite] = useState(false);

  const isProductInFavorites = favorites.find(prod => prod.id === product.id);

  const toggleFavorite = prodId => {
    if (!isProductInFavorites) {
      const product = products.find(prod => prod.id === prodId);
      setFavorites(prevFavorites => [...prevFavorites, product]);
    } else {
      const updatedFavorites = favorites.filter(prod => prod.id !== prodId);
      setFavorites(updatedFavorites);
    }

    setIsFavorite(!isFavorite);
  };
  const { name, id, price, description, shop } = product;
  return (
    <ProductItem>
      <ShopListArticle>
        <h3>{name.toUpperCase()}</h3>
        {/* <ImgBox> */}
        <h3>{shop}</h3>
        <SvgHeart
          width={20}
          height={20}
          style={isProductInFavorites ? { fill: 'blue' } : { fill: 'none' }}
          onClick={() => toggleFavorite(id)}
        >
          <use href={`${sprite}#icon-heart`}></use>
        </SvgHeart>
        {/* </ImgBox> */}

        <Price>Price: {price}$</Price>
        <Description>Description: {description}</Description>
        <AddToShoppingCart
          type="button"
          onClick={() => handleAddToOrder(product, id)}
        >
          Add to shopping cart
        </AddToShoppingCart>
      </ShopListArticle>
    </ProductItem>
  );
};
