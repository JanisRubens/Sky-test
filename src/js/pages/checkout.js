import React from "react";
import Section from '../components/Section'

export default class Checkout extends React.Component {

  render() {
    return (
        <div>
            <h4 className="text">Checkout summary</h4>
            <h6 className="text">Products Selected:</h6>
            <ul className="text">
                {this.props.user.productsSelected ? this.props.user.productsSelected.map( (p,i )=>{
                    return <li key={i}>{p.name}</li>
                }) : "Nothing was selected"}
            </ul>
        </div>
    );
  }
}