import reducer from '../src/js/reducers/productReducer'

describe('products reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle SET_AVAILABLE_PRODUCTS', () => {
    expect(
      reducer([], {
        type: "SET_AVAILABLE_PRODUCTS",
        payload: [
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
        ]
      })
    ).toEqual(
        [
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
        ]
    )
  })

 it('should handle TOGGLE_PRODUCT_SELECTED', () => {
    expect(
      reducer([
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
     ],
     {
        type: "TOGGLE_PRODUCT_SELECTED",
        payload: 2
      })
    ).toEqual(
        [
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL", "selected": true },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
        ]
    )
  })
})