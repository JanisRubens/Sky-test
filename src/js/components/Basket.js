import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Basket = ({ products, checkoutButton}) => (
    <div>
        <h2>Basket</h2>
            <ul>
                {products.map( (p,i) => {
                    return <li key={i} >{p.name}</li>
                })}
            </ul>
            <Button 
                disabled={products.length ? false : true} 
                id={checkoutButton.id} 
                value={checkoutButton.value} 
                action={checkoutButton.action.bind(this, products)}
            />
            
    </div>
)

Basket.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  checkoutButton: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }).isRequired
}


export default Basket