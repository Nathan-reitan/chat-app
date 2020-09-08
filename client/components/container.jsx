import React from 'react';
import Message from './message';

export default function Container(props) {
  return (
    <div className='border m-2 h-75 bg-dark'>
      <Message/>
    </div>
  );
}
