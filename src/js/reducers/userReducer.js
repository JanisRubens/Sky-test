const initialState = {
    details: {
      id: null,
      location: "UNKNOWN"
    },
    readyForCheckout: false,
    productsSelected: []
  }

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "SET_USER_LOCATION": {
        return {
          ...state,
          details: {...state.details, location: action.payload},
        }
      }
      case "SET_USER_ID": {
        return {
          ...state,
          details: {...state.details, id: action.payload},
        }
      }
      case "PROCEED_TO_CHECKOUT": {
        return {
          ...state,
          productsSelected: [...action.payload],
          readyForCheckout: true
        }
      }
    }

    return { ...state, readyForCheckout: false }
}