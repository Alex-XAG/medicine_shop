import { useState } from 'react';

export const OrderForm = ({ onSubmit, order }) => {
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputAddress, setInputAddress] = useState('');

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

    console.log(order);

    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required onChange={handleInputChange} />
      <label htmlFor="phone">Phone</label>
      <input type="tel" name="phone" required onChange={handleInputChange} />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required onChange={handleInputChange} />
      <label htmlFor="address">Address</label>
      <input
        type="address"
        name="address"
        required
        onChange={handleInputChange}
      />
      <button type="submit">Send order</button>
    </form>
  );
};
