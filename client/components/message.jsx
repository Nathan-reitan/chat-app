import React from 'react';

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'tesing app',
      timeStamp: 'date time'
    };
  }

  render() {
    return (
      <div className='bg-primary w-25 rounded m-2 text-light'>
        <div><p>{this.state.message}</p></div>
        <div>{this.state.timeStamp}</div>

      </div>
    );
  }
}
