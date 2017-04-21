import React from 'react';
import PropTypes from 'prop-types'

const Column = (props) => {
    return (
        <div className={`column ${props.columnSize}`}>
            { props.children }
        </div>
    )
}

Column.PropTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
}

export default Column