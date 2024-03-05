import { UserInput } from 'components/OrderForm/OrderForm.styled';
import { useState } from 'react';
import {
  HistoryItem,
  HistoryItemOrder,
  HistoryOrderList,
  HistoryPageBox,
  HistorySearchBox,
  HistoryText,
  HistoryTitle,
  HistoryUserList,
} from './HistoryPage.styled';

const HistoryPage = ({ orderHistory }) => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setInputName(target.value);
        break;
      case 'email':
        setInputEmail(target.value);
        break;
      default:
        return;
    }
  };

  const handleSearch = (inputName, inputEmail) => {
    const userOrder = orderHistory.filter(
      ({ name, email }) => name === inputName || email === inputEmail
    );
    if (userOrder.length > 0) {
      return userOrder;
    }
    return false;
  };

  const userOrder = handleSearch(inputName, inputEmail);

  return (
    <HistoryPageBox>
      <HistorySearchBox>
        <label htmlFor="name">Name</label>
        <UserInput
          type="text"
          name="name"
          required
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <UserInput
          type="email"
          name="email"
          required
          onChange={handleInputChange}
        />
      </HistorySearchBox>
      {userOrder ? (
        <HistoryUserList>
          {userOrder.map(order => (
            <HistoryItem key={order.id}>
              <HistoryOrderList>
                {order.order.map(ord => (
                  <HistoryItemOrder>
                    <HistoryTitle>{ord.name}</HistoryTitle>
                    <HistoryText>Form: {ord.form}</HistoryText>
                    <HistoryText>Quantity: {ord.quantity}</HistoryText>
                  </HistoryItemOrder>
                ))}
              </HistoryOrderList>
            </HistoryItem>
          ))}
        </HistoryUserList>
      ) : (
        <h2>There isn`t orders from this client!!!</h2>
      )}
    </HistoryPageBox>
  );
};

export default HistoryPage;
