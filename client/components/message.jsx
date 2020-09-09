import React from 'react';

export default function Message(props) {
  const stamp = props.time.split('T');
  const date = stamp[0];
  let time = stamp[1];
  time = time.split('.');
  time = time[0];

  return (
    <div className='bg-primary w-25 rounded m-2 p-1 text-light'>
      <div><p>{props.message}</p></div>
      <div>{date}</div>
      <div>{time}</div>
    </div>
  );
}
