import { formatCurrency } from '../../utils/helpers';
import DeleteCartItem from './DeleteCartItem';
import UpdateCartItemQuantity from './UpdateCartItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="sm-items-center py-3 sm:flex sm:justify-between">
      <p className="sm-mb-0 mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateCartItemQuantity pizzaId={pizzaId} />
        <DeleteCartItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
