import * as actions from '../src/js/actions'

describe('action setUserLocation', () => {
  it('should create an action to set user location', () => {
    const location = 'LONDON'
    const expectedAction = {
      type: "SET_USER_LOCATION",
      payload: location
    }
    expect(actions.setUserLocation(location)).toEqual(expectedAction)
  })
})

describe('action setUserID', () => {
  it('should create an action to set user id', () => {
    const id = 1
    const expectedAction = {
      type: "SET_USER_ID",
      payload: id
    }
    expect(actions.setUserID(id)).toEqual(expectedAction)
  })
})

describe('action proceedToCheckout', () => {
  it('should create an action to proceed to checkout', () => {
    const products = [
       { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
      { "id": 3, "cat": "News", "name": "Sky News", "country": false }
    ]
    const expectedAction = {
      type: "PROCEED_TO_CHECKOUT",
      payload: products
    }
    expect(actions.proceedToCheckout(products)).toEqual(expectedAction)
  })
})

describe('action setAvailableProducts', () => {
  it('should create an action to set available products', () => {
    const products = [
       { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
      { "id": 3, "cat": "News", "name": "Sky News", "country": false }
    ]
    const expectedAction = {
      type: "SET_AVAILABLE_PRODUCTS",
      payload: products
    }
    expect(actions.setAvailableProducts(products)).toEqual(expectedAction)
  })
})

describe('action toggleProductSelected', () => {
  it('should create an action to toggle Product Selected', () => {
    const productID = 2
    const expectedAction = {
      type: "TOGGLE_PRODUCT_SELECTED",
      payload: productID
    }
    expect(actions.toggleProductSelected(productID)).toEqual(expectedAction)
  })
})