import styled from '@emotion/styled';

export const ShopPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const ListsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
`;

export const ProductList = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  margin-left: auto;

  height: 780px;
  width: 70%;
  overflow-y: auto;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
`;

export const ShopList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 21%;
  height: 780px;

  padding: 20px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
`;

export const ShopItem = styled.li`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  width: 210px;

  cursor: pointer;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
  padding: 10px;

  &:hover {
    background-color: rgba(0, 0, 255);
    color: #fff;
  }
`;

export const ProductListFavorites = styled.ul`
  list-style: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  margin-left: auto;
  width: 1200px;
  overflow-y: auto;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
`;
