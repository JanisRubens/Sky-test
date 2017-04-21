import React from 'react';
import PropTypes from 'prop-types'

import Product from './Product'

const ProductList = ({title, products, toggleProduct }) => {
    let productItems = products.map( (p, i) => {
        return <Product key={i} productName={p.name} selected={p.selected} handleChange={toggleProduct.bind(this, p.id)}/>
    })
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {productItems}
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    title: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cat: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    toggleProduct: PropTypes.func.isRequired
}

export default ProductList