export const select = {
    templateOf: {
        products: '#template-products',
        home: '#template-home',

    },
    containerOf: {
        pages: '#pages',
        home: '.home-wrapper',
        products: '.product-wrapper',
        productsHome: '.home-products',

    },

    nav: {
        links: '.navbar a',
    },

};

export const classNames = {
    nav: {
        active: 'active',
    },
    pages: {
        active: 'active',
    },
};

export const settings = {
    db: {
        url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
        home: 'home',
        products: 'products',
        contact: 'contact',

    }

};

export const templates = {
     products: Handlebars.compile(document.querySelector(select.templateOf.products).innerHTML),
     home: Handlebars.compile(document.querySelector(select.templateOf.home).innerHTML),
};