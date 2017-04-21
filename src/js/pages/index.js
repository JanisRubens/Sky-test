import React from "react";

import Section from '../components/Section'
import Column  from '../components/Column'
import ProductList from '../components/ProductList'
import Basket from '../components/Basket'

export default class Index extends React.Component {


  componentWillReceiveProps( props ) {
        //This can be handled differnetly( for example writigin a navigation reducer/action ), but im runing out of time
        if (props.user.readyForCheckout) {
          props.router.push('/checkout')
        }
  }

  getUniqCategories() {
    return this.props.products ? [...new Set(this.props.products.map(p => p.cat))] : null
  }

  createCategoriesMarkup() {
    let categories = this.getUniqCategories();

    return categories.map( (cat, i) => {
      return  <Column key={i} columnSize={'column-33'}>
                <ProductList 
                  toggleProduct={this.props.toggleProductSelected}
                  title={cat} 
                  products={this.props.products.filter(p => p.cat === cat)} 
                />
              </Column>
    })
  }

  render() {

    let categoriesComponents = this.createCategoriesMarkup();

    return (
        <Section>
            {categoriesComponents}
            <Column columnSize={'column-33'}>
              <Basket checkoutButton={{value: "checkout", id: "checkout", action: this.props.proceedToCheckout }} 
                products={this.props.products.filter(p => p.selected)}/>
            </Column>
        </Section>
    );
  }
}