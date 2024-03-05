import { OrderForm } from '../../components/OrderForm/OrderForm';

const ShoppingCartPage = ({ orders, setOrders, onSubmit, orderHistory }) => {
  return (
    <div>
      <OrderForm onSubmit={onSubmit} orders={orders} setOrders={setOrders} />
    </div>
  );
};

export default ShoppingCartPage;
