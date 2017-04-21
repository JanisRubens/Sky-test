const initialState = []

export default function reducer(state=initialState, action) {

    switch (action.type) {
      case "SET_AVAILABLE_PRODUCTS": {
        return [
          ...state,
          ...action.payload,
        ]
      }
      case "TOGGLE_PRODUCT_SELECTED": {
        let newState = {...state}
        let index = state.findIndex( p => p.id === action.payload )
        if (index > -1) {
            newState[index].selected = !newState[index].selected
            return [
                ...state,
                ...newState
            ]
        } else {
            return state
        }
      }
    }

    return state
}