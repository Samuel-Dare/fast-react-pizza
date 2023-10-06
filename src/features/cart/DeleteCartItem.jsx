import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

export default function DeleteCartItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteCartItem = (e) => {
    e.preventDefault();
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="primary" onClick={handleDeleteCartItem}>
      Delete
    </Button>
  );
}
