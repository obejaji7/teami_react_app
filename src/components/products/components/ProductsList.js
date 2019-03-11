import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from './Product';

class ProductsList extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
      params: PropTypes.shape({
        category: PropTypes.string.isRequired
      })
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const products = await this.getData(match.params.category);
    this.setState({
      products
    });
  }

  async componentWillReceiveProps(nextProps) {
    const { match } = nextProps;
    const products = await this.getData(match.params.category);
    this.setState({
      products
    });
  }

  async getData(categoryParam = 'all') {
    this.products = await axios.get(
      `http://localhost:5000/api/products/${categoryParam === 'all' ? '' : categoryParam}`
    );
    return this.products.data;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        {products.map(product => (
          <Product key={product.name} {...product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
