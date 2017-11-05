import React, { Component } from 'react';
import Product from './Product';
import Total from './Total';
import ProductForm from './ProductForm';

export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      productList: [
        {
          name: 'Android',
          price: 121
        },
        {
          name: 'Apple',
          price: 1211
        },
        {
          name: 'Nokia',
          price: 63
        }
      ]
    };
    this.caculateTotal = this.caculateTotal.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  caculateTotal(price) {
    this.setState({
      total: this.state.total + price
    });
  }
  showProduct(name) {
    alert('You selected ' + name);
  }
  createProduct(product) {
    this.setState({
      productList:this.state.productList.concat(product)
    });
  }
  render() {
    let listComponet = this;
    let products = this.state.productList.map(product =>
      (
        <Product key={product.name} name={ product.name } price={ product.price } handleShow={ listComponet.showProduct } handleTotal={ listComponet.caculateTotal } />
      )
    );

    return (
      <div>
        <ProductForm handleCreate={this.createProduct}/>
        { products }
        <Total total={ this.state.total } />
      </div>
    );
  }
}
