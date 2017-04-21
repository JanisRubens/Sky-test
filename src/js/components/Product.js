import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ handleChange, selected, productName }) => (
  <li>
    <label>
        <input
            name={productName}
            type="checkbox"
            checked={selected}
            onChange={handleChange}
        />
        {productName}
        </label>
  </li>
)

Product.propTypes = {
    productName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
}

export default Product