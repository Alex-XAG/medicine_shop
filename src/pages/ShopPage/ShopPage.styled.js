import styled from '@emotion/styled';

export const ListsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  margin-left: auto;

  max-height: 580px;
  width: 70%;
  overflow-y: scroll;
`;

export const ShopList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ShopListArticle = styled.article`
  position: relative;
`;

export const SvgHeart = styled.svg`
  stroke: rgba(0, 0, 255);
  position: absolute;
  top: 10px;
  right: 10px;
`;
