import styled from '@emotion/styled';

export const ShoppingCartBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShoppingCartForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  width: 1200px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;
`;

export const ShoppingCartorderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const UserDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  padding: 20px;
  height: 400px;
  width: 300px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;
`;

export const UserInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;

  font-size: 18px;

  border-radius: 10px;
  border: 1px solid rgba(0, 0, 255);
`;

export const OrderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  height: 400px;
  width: 800px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;
`;

export const OrderItem = styled.li`
  width: 210px;
  /* max-height: 350px; */
  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
  padding: 10px;
`;

export const OrderArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const OrderPrice = styled.p`
  padding: 0;
  margin: 0;

  font-weight: 700;
`;

export const OrderTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

export const OrderQuantity = styled.p`
  padding: 0;
  margin: 0;
`;

export const OrderTotal = styled.p`
  padding: 0;
  margin: 0;

  font-weight: 700;
`;

export const OrderBtnBox = styled.div`
  display: flex;
  gap: 7px;
`;

export const OrderBtnQuantity = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  font-size: 26px;
  color: #fff;
  background-color: rgba(0, 0, 255, 0.7);

  border: none;

  border-radius: 50%;

  &:hover {
    color: rgba(0, 0, 255, 0.7);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 255, 0.7);
  }
`;

export const OrderBtnToRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  font-size: 14px;
  color: #fff;
  background-color: rgba(0, 0, 255, 0.7);

  border: 1px solid #fff;

  border-radius: 8px;

  &:hover {
    color: rgba(0, 0, 255, 0.7);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 255, 0.7);
  }
`;

export const OrderSubmitBox = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 30px;
  gap: 20px;
`;

export const OrderTotalPrice = styled.p`
  padding: 0;
  margin: 0;
  font-size: 26px;

  font-weight: 700;
`;

export const OrderSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;

  font-size: 24px;
  color: #fff;
  background-color: rgba(0, 0, 255, 0.7);

  border: inherit;

  border-radius: 8px;

  &:hover {
    color: rgba(0, 0, 255, 0.7);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 255, 0.7);
  }
`;
