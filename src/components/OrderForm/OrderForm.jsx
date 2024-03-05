import { useState } from 'react';
import {
  OrderArticle,
  OrderBtnBox,
  OrderBtnQuantity,
  OrderBtnToRemove,
  OrderItem,
  OrderList,
  OrderPrice,
  OrderQuantity,
  OrderSubmitBox,
  OrderSubmitBtn,
  OrderTitle,
  OrderTotal,
  OrderTotalPrice,
  ShoppingCartBox,
  ShoppingCartForm,
  ShoppingCartorderBox,
  UserDataBox,
  UserInput,
} from './OrderForm.styled';
import { useEffect } from 'react';

export const OrderForm = ({ onSubmit, orders, setOrders }) => {
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setInputName(target.value);
        break;
      case 'phone':
        setInputPhone(target.value);
        break;
      case 'email':
        setInputEmail(target.value);
        break;
      case 'address':
        setInputAddress(target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(inputName, inputPhone, inputEmail, inputAddress);

    // setOrders([]); ???
    evt.currentTarget.reset();
  };

  const handleIncrementQuantityOfOrder = productId => {
    const product = orders.find(product => product.id === productId);
    const updatedQuantity = orders.map(item => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity += 1) };
      }

      return item;
    });

    setOrders(updatedQuantity);
  };

  const handleDecrementQuantityOfOrder = productId => {
    const product = orders.find(product => product.id === productId);

    if (product.quantity <= 1) {
      handleRemoveOrder(productId);
      return;
    }

    const updatedQuantity = orders.map(item => {
      if (product.id === item.id) {
        return { ...item, quantity: (item.quantity -= 1) };
      }

      return item;
    });

    setOrders(updatedQuantity);
  };

  const handleRemoveOrder = productId => {
    const updatedOrder = orders.filter(product => product.id !== productId);
    setOrders(updatedOrder);
  };

  const countTotalPrice = orders.reduce(
    (total, { price, quantity }) => (total = total + price * quantity),
    0
  );

  return (
    <ShoppingCartBox>
      <h1>Shopping cart</h1>
      <ShoppingCartForm onSubmit={handleSubmit}>
        <ShoppingCartorderBox>
          <UserDataBox>
            <label htmlFor="name">Name</label>
            <UserInput
              type="text"
              name="name"
              required
              onChange={handleInputChange}
            />
            <label htmlFor="phone">Phone</label>
            <UserInput
              type="tel"
              name="phone"
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
            <label htmlFor="address">Address</label>
            <UserInput
              type="address"
              name="address"
              required
              onChange={handleInputChange}
            />
          </UserDataBox>
          <OrderList>
            {orders.map(({ pharmacy, name, price, quantity, id, shop }) => (
              <OrderItem key={id}>
                <OrderArticle>
                  <OrderTitle>{name}</OrderTitle>
                  <OrderTitle>{shop}</OrderTitle>
                  <OrderPrice>Price / per item: {price}$</OrderPrice>
                  <OrderQuantity>Quantity: {quantity}</OrderQuantity>
                  <OrderTotal>Total: {price * quantity}$</OrderTotal>
                  <OrderBtnBox>
                    <OrderBtnQuantity
                      type="button"
                      onClick={() => handleDecrementQuantityOfOrder(id)}
                    >
                      -
                    </OrderBtnQuantity>
                    <OrderBtnQuantity
                      type="button"
                      onClick={() => handleIncrementQuantityOfOrder(id)}
                    >
                      +
                    </OrderBtnQuantity>
                  </OrderBtnBox>

                  <OrderBtnToRemove
                    type="button"
                    onClick={() => handleRemoveOrder(id)}
                  >
                    Remove from order
                  </OrderBtnToRemove>
                </OrderArticle>
              </OrderItem>
            ))}
          </OrderList>
        </ShoppingCartorderBox>
        <OrderSubmitBox>
          <OrderTotalPrice>Total price: {countTotalPrice}</OrderTotalPrice>
          <OrderSubmitBtn type="submit">Send order</OrderSubmitBtn>
        </OrderSubmitBox>
      </ShoppingCartForm>
    </ShoppingCartBox>
  );
};
