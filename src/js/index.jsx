import React from 'react';
import {render} from 'react-dom';

let $ = require('jquery');
const full = require('fullpage.js');
$.fullpage = full;

require('styles/index');
// require('styles/fonts/google/abril-fatface-v8-latin/style');
// require('styles/fonts/google/bree-serif-v5-latin/style');
// require('styles/fonts/google/copse-v6-latin/style');
// require('styles/fonts/google/crete-round-v5-latin/style');
// require('styles/fonts/google/damion-v6-latin/style');
// require('styles/fonts/google/ek-mukta-v7-latin/style');
// require('styles/fonts/google/harmattan-v1-latin/style');
// require('styles/fonts/google/jomhuria-v2-latin/style');
// require('styles/fonts/google/norican-v4-latin/style');
// require('styles/fonts/google/yeseva-one-v10-latin/style');
// require('styles/fonts/google/yesteryear-v5-latin/style');
require('styles/fonts/google/kaushan-script-v5-latin/style');

const SectionOne = require('./components/sections/SectionOne/SectionOne.jsx');
const SectionTwo = require('./components/sections/SectionTwo/SectionTwo.jsx');
const SectionThree = require('./components/sections/SectionThree/SectionThree.jsx');

class App extends React.Component {

    componentDidMount() {
        let options = {
            sectionClassName:     'section',
            anchors:              ['', 'works', 'about', 'resume'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        true,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            delay:                600,
            arrowNavigation:      true
        };
        $('#fullpage').fullpage(options);
    };

    render() {
        return (
            <div id="fullpage">
                <div className="section">
                    <SectionOne></SectionOne>
                </div>
                <div className="section">
                    <SectionTwo></SectionTwo>
                </div>
                <div className="section">
                    <SectionThree></SectionThree>
                </div>
                <div className="section">
                </div>
            </div>
        )
    }
}

document.addEventListener("DOMContentLoaded", function() {
    render(<App/>, $('body')[0]);
});
