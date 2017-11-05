import React, { Component } from 'react';

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 0
    };
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    //alert('Name:' + this.refs.name.value + '- $' + this.refs.price.value);
    let product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value)
    }
    this.props.handleCreate(product);
    this.refs.name.value = '';
    this.refs.price.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <input type='text' placeholder='Product Name' ref='name' /> -
        <input type='text' placeholder='Product Price' ref='price' />
        <br/>
        <br/>
        <button>Create Product</button>
        <hr/>
      </form>
    );
  }
}
