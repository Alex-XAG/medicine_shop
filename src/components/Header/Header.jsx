import {
  HeaderBox,
  HeaderLogo,
  HeaderNav,
  HeaderNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>Madicine Shop</HeaderLogo>
      <HeaderNav>
        <HeaderNavLink to="/">Shop page</HeaderNavLink>
        <HeaderNavLink to="/shopping-cart">Shopping cart</HeaderNavLink>
        <HeaderNavLink to="/favorites">Favorites</HeaderNavLink>
        <HeaderNavLink to="/history">History</HeaderNavLink>
      </HeaderNav>
    </HeaderBox>
  );
};
