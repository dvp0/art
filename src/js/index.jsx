import React from 'react';
import {render} from 'react-dom';
import {SectionsContainer, Section} from 'react-fullpage';

require('styles/header');
require('styles/fonts/google/abril-fatface-v8-latin/style');
require('styles/fonts/google/bree-serif-v5-latin/style');
require('styles/fonts/google/copse-v6-latin/style');
require('styles/fonts/google/crete-round-v5-latin/style');
require('styles/fonts/google/damion-v6-latin/style');
require('styles/fonts/google/ek-mukta-v7-latin/style');
require('styles/fonts/google/harmattan-v1-latin/style');
require('styles/fonts/google/jomhuria-v2-latin/style');
require('styles/fonts/google/kaushan-script-v5-latin/style');
require('styles/fonts/google/norican-v4-latin/style');
require('styles/fonts/google/yeseva-one-v10-latin/style');
require('styles/fonts/google/yesteryear-v5-latin/style');

const Section1 = require('sections/sections1.jsx');

class App extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let options = {
            sectionClassName:     'section',
            anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar:            false,
            navigation:           true,
            verticalAlign:        true,
            sectionPaddingTop:    '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation:      true
        };

        return (
            <div>
                <SectionsContainer className="container-body" {...options}>
                    <Section className="custom-section text-center" verticalAlign="true" color="white" textAlign="center">
                        <Section1>artofengineer.in</Section1>
                    </Section>
                    <Section color="#A7DBD8">
                    </Section>
                    <Section color="#E0E4CC">Page 3</Section>
                </SectionsContainer>
            </div>
        );
    }
}

document.addEventListener("DOMContentLoaded", function() {
    render(<App/>, document.getElementById('artofengineerin'));
});
