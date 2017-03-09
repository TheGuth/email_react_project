import React from 'react';
import Data from './data';
import {Link} from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inbox: Data.inbox,
      spam: Data.spam
    };

    console.log(props);
    console.log(this.state.inbox);
    console.log(this.state.spam);
  };



  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><button>
              <Link to={'/'}>Home</Link>
            </button></li>
            <li><button>
              <Link to={'/inbox'} >Inbox</Link>
            </button></li>
            <li><button>
              <Link to={'/spam'} >Spam</Link>
            </button></li>
          </ul>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  };
}
