import React, { Component } from 'react';

import '../css/main.css';

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="main" className="container">
        {this.props.children}
      </div>
    );
  }
}

export default Main;