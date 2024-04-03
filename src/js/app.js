import { settings } from './settings.js';

const app = {
    initData: function() {
        const thisApp = this;

        thisApp.data = {};
        const url = settings.db.url + '/' + settings.db.products;

        fetch(url)
            .then(function(rawResponse){
                return rawResponse.json();
            })
            .then(function(parsedResponse){
                console.log(parsedResponse);
                thisApp.data.products = parsedResponse;
                console.log('thisApp.data.products', thisApp.data.products);

                
            });
            
    },

    init: function() {
        const thisApp = this;

        thisApp.initData();
    },
};

app.init();