import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentCartItemById } from '../cart/cartSlice';
import DeleteCartItem from '../cart/DeleteCartItem';
import UpdateCartItemQuantity from '../cart/UpdateCartItemQuantity';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const newItem = {
    pizzaId: id,
    name,
    quantity: 1,
    unitPrice,
    totalPrice: unitPrice * 1,
  };

  const handleAddToCart = (e) => {
    e.preventDefault();

    dispatch(addItem(newItem));
  };
  const currentCartItemQuantity = useSelector(getCurrentCartItemById(id));

  const isInCart = currentCartItemQuantity > 0;

  // const pizzaId = useSelector((state) =>
  //   state.cart.cart.find((item) => item.pizzaId === newItem.pizzaId),
  // );

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateCartItemQuantity
                pizzaId={id}
                currentCartItemQuantity={currentCartItemQuantity}
              />
              <DeleteCartItem pizzaId={newItem.pizzaId} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
