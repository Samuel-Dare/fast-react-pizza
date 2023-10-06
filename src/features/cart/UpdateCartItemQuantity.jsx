import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentCartItemById,
  increaseItemQuantity,
} from './cartSlice';

export default function UpdateCartItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  //   const currentCartItemQuantity = useSelector(getCurrentCartItemById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
