import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
    constructor(){
        const thisHome = this;

        thisHome.render();
    }

    render(){
        const thisHome = this;

        thisHome.dom = {};

        const homeWrapper = document.querySelector(select.containerOf.home);

        const generatedHTML = templates.home(thisHome.dom.wrapper);
        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        homeWrapper.appendChild(generatedDOM);
    }
}

export default Home;