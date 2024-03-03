import { useState } from 'react';
import { OrderForm } from './OrderForm/OrderForm';
import { nanoid } from 'nanoid';

const ShoppingCartPage = ({ orders, setOrders }) => {
  const [order, setOrder] = useState([]);

  const onSubmit = (inputName, inputPhone, inputEmail, inputAddress) => {
    setOrder(prevOrder => [
      ...prevOrder,
      createOrder({
        name: inputName,
        phone: inputPhone,
        email: inputEmail,
        address: inputAddress,
        order: [...orders],
      }),
    ]);
  };

  const createOrder = data => {
    const newOrder = {
      ...data,
      id: nanoid(),
    };
    return newOrder;
  };

  return (
    <div>
      <OrderForm onSubmit={onSubmit} order={order} />
    </div>
  );
};

export default ShoppingCartPage;
