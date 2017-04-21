import React from 'react';
import PropTypes from 'prop-types'

const Section = (props) => {
    return (
        <section className="section row">
            { props.children }
        </section>
    )
}

Section.PropTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
}

export default Section