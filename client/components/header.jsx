import React from 'react';

export default function Header(props) {
  return (
    <header className="text-light bg-dark d-flex justify-content-between">
      <span>Reitan Chat App</span>
      <span className="mx-2">
        <i onClick={() => props.setView('cart')} className="fas fa-shopping-cart mx-2 pointer"></i>
        {props.cartItemCount}
      </span>
    </header>
  );
}
