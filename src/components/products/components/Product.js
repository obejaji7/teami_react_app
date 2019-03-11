import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

function Product(product) {
  return (
    <Card className="md-block-centered product-card">
      <CardTitle
        title={product.name}
        subtitle={`${product.categories.replace(/,/g, ', ')} - ${product.brand}`}
      />
      <CardText>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center'
          }}
        >
          <img width="150" style={{ marginRight: '2rem' }} src={product.photo} alt={product.name} />
          <div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
            <p>{product.description}</p>
            <p>
              <b>Stock: </b>
              {product.stock}
            </p>
            <p>
              <b>Price: </b>
              {product.price}
            </p>
          </div>
        </div>
      </CardText>
    </Card>
  );
}

export default Product;
