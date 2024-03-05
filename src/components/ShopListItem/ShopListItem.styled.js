import styled from '@emotion/styled';

export const ShopListArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ProductItem = styled.li`
  width: 210px;
  /* max-height: 350px; */
  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
  padding: 10px;
`;

export const ImgBox = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
`;

export const SvgHeart = styled.svg`
  stroke: rgba(0, 0, 255);
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;
`;

export const Price = styled.p`
  padding: 0;
  margin: 0;

  font-weight: 700;
`;

export const Description = styled.p`
  padding: 0;
  margin: 0;
`;

export const AddToShoppingCart = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-top: auto;
  padding: 5px;

  background-color: #fff;
  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 255);
    color: #fff;
  }
`;
