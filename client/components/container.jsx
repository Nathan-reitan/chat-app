import React from 'react';
import Message from './message';

export default function Container(props) {
  return (
    <div className='border m-2 h-75 bg-dark'>
      {props.messages.map(message => {
        return (
          <Message
            key={message.messageID}
            message={message.message}
            time={message.createdAt}
          />
        );
      })
      }
    </div>
  );
}
