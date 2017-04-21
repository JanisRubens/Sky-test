const LocationService = {

    findLocation: (customerID) => {
        return new Promise( (resolve, reject) => {
            let location;
            switch(parseInt(customerID)) {
                    case 1:
                        location = "LONDON"
                    break;
                    case 2:
                        location = "LIVERPOOL"
                    break;
                    default:
                        location = "UNKNOWN"
                }


            resolve( location )
        })
    }
}

module.exports = LocationService;