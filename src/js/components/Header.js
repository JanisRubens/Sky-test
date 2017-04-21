import React from 'react'

const Header = (props) => (
    <header> <h5 className="text"> { props.location.pathname.replace(/[^a-zA-Z0-9 ]/g, "") } </h5></header>
)

export default Header