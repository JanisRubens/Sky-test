import reducer from '../src/js/reducers/userReducer'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        details: {
        id: null,
        location: "UNKNOWN"
        },
        readyForCheckout: false,
        productsSelected: []
    })
  })

  it('should handle SET_USER_LOCATION', () => {
    expect(
      reducer({
        details: {
        id: null,
        location: "UNKNOWN"
        },
        readyForCheckout: false,
        productsSelected: []
    },
    {
        type: "SET_USER_LOCATION",
        payload: "LONDON"
    })
    ).toEqual({
        details: {
            id: null,
            location: "LONDON"
        },
        readyForCheckout: false,
        productsSelected: []
    })
  })

    it('should handle SET_USER_ID', () => {
    expect(
      reducer({
        details: {
        id: null,
        location: "UNKNOWN"
        },
        readyForCheckout: false,
        productsSelected: []
    },
    {
        type: "SET_USER_ID",
        payload: 1
    })
    ).toEqual({
        details: {
            id: 1,
            location: "UNKNOWN"
        },
        readyForCheckout: false,
        productsSelected: []
    })
  })

      it('should handle PROCEED_TO_CHECKOUT', () => {
    expect(
      reducer({
        details: {
        id: 1,
        location: "UNKNOWN"
        },
        readyForCheckout: false,
        productsSelected: []
    },
    {
        type: "PROCEED_TO_CHECKOUT",
        payload: [
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
          ]
    })
    ).toEqual({
        details: {
            id: 1,
            location: "UNKNOWN"
        },
        readyForCheckout: true,
        productsSelected: [
            { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
            { "id": 3, "cat": "News", "name": "Sky News", "country": false }
        ]
    })
  })


})