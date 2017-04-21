import LocationService from '../services/LocationService'
import CatalogueService from '../services/CatalogueService'

export const getLocationById = ( id ) => {
    return dispatch => {
        LocationService.findLocation( id ).then( location => {        
            dispatch( setUserLocation( location ))
            dispatch( getProductsByLocation( location ))
            dispatch( setUserID( id ))
        })
    }
}

export const setUserLocation = ( location ) => {
    return {
        type: "SET_USER_LOCATION",
        payload: location
    }
}

export const setUserID = ( id ) => {
    return {
        type: "SET_USER_ID",
        payload: id
    }
}

export const proceedToCheckout = ( products ) => {
    return {
        type: "PROCEED_TO_CHECKOUT",
        payload: products
    }
}

export const getProductsByLocation = ( location ) => {
    return dispatch => {
        CatalogueService.getCountrySpecific( location ).then( products => {   
            //add Selected field for product store
            products.forEach( product => product.selected = false)
            dispatch( setAvailableProducts( products ))
        })
    }
}

// export const selectProductByID = (id) => {
//     return dispatch => {
//         CatalogueService.getByID(id).then( product => {     
//             dispatch( toggleSelectedProduct( product ))
//         })
//     }
// }

export const setAvailableProducts = ( products ) => {
    return  {
        type: "SET_AVAILABLE_PRODUCTS",
        payload: products
    }
}

export const toggleProductSelected = ( productID ) => {
    return {
        type: "TOGGLE_PRODUCT_SELECTED",
        payload: productID
    }
}
