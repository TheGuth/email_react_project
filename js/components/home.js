import React from 'react';
import Data from './data';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inbox: Data.inbox,
      spam: Data.spam
    };

    console.log(this.state.inbox);
    console.log(this.state.spam);
  };



  render() {
    return (
      <div>

      </div>
    );
  };
}
