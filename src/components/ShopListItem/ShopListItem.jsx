import { useState, useEffect } from 'react';
import { ShopListArticle, SvgHeart } from './ShopListItem.styled';
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

  return (
    <li>
      <ShopListArticle>
        <SvgHeart
          width={20}
          height={20}
          style={isProductInFavorites ? { fill: 'blue' } : { fill: 'none' }}
          onClick={() => toggleFavorite(product.id)}
        >
          <use href={`${sprite}#icon-heart`}></use>
        </SvgHeart>
        <h3>{product.name}</h3>
        <img href="/" alt="Medicine" width={200} height={100} />
        <p>{product.price}$</p>
        <p>{product.description}</p>
        <button
          type="button"
          onClick={() => handleAddToOrder(product, product.id)}
        >
          Add to shopping cart
        </button>
      </ShopListArticle>
    </li>
  );
};
