const $ = require('jquery');
import React from 'react';

require('styles/components/sectionOne');
const Gradient = require('../../helpers/Gradient.es.js');

class Section1 extends React.Component {

    startGradient() {

        let gradient = new Gradient({
            // startSelector: '#startColorOne',
            // endSelector: '#endColorOne',
            cssGradientSelector: '.sectionOneWrapper',
            gradientSpeed: 0.005
        });

        gradient.start();
    }

    componentDidMount() {
        this.startGradient();
    }

    render() {
        const top = ($(window).height() / 2 ) - 25;
        const styles = { top: top };

        return (
            <div className="sectionOneWrapper section-wrapper">
                <div className="titleWrapper">
                    <h1 className="title" style={styles}>
                        art of engineer
                        <span className="dull">.</span>
                        in
                        <span className="dull">g</span>
                    </h1>
                </div>
            </div>
        )
    }
}


module.exports = Section1;