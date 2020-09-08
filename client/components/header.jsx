import React from 'react';

export default function Header(props) {
  return (
    <header className="px-1 text-light bg-dark d-flex justify-content-between">
      <span>Reitan Chat App</span>
      <span className="mx-1">
        <i className="fas fa-comment-dots mx-2 pointer"></i>
      </span>
    </header>
  );
}
