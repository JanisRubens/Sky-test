import React from 'react';
import PropTypes from 'prop-types'

const Button = ({id, action, value, disabled}) => {
    return (
        <button disabled={disabled} id={id} className={'button small'} onClick={action}>{value}</button>
    )
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default Button