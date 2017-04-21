const CatalogueService = {
    products: [
        { "id": 0, "cat": "Sports", "name": "Arsenal TV", "country": "LONDON" },
        { "id": 1, "cat": "Sports", "name": "Chelsea TV", "country": "LONDON" },
        { "id": 2, "cat": "Sports", "name": "Liverpool TV", "country": "LIVERPOOL" },
        { "id": 3, "cat": "News", "name": "Sky News", "country": false },
        { "id": 4, "cat": "News", "name": "Sky Sports News", "country": false }
    ],

    getAllProducts: () => {
        //Adding Promise so it behaves as API
        return new Promise((resolve, reject) => { resolve(CatalogueService.products) })
    },

    getByCat: (cat) => {
        return CatalogueService.products.filter(p => p.cat === cat)
    },

    getByName: (name) => {
        return CatalogueService.products.filter(p => p.name === name)
    },

    getCountrySpecific: ( country ) => {
        return new Promise( (resolve, reject) => { 

           let selection = CatalogueService.products.filter(p => !p.country || p.country === country)
           if (selection) {
               resolve(selection)
           } else {
               reject("Evrything is blocked for this Country")
           }
        })
    },

    getByID: ( id ) => {
        var i;
        for (i = 0; i < CatalogueService.products.length; i++) {
            if (CatalogueService.products[i].getDetails().id == id)
                return CatalogueService.products[i];
        };
	
	    return false;
    }

}

module.exports = CatalogueService;