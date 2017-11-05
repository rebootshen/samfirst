import React, { Component } from 'react';

export default class Total extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Total Cash : ${this.props.total}</h3>
      </div>
    );
  }
}
