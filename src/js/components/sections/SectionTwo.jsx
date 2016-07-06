const $ = require('jquery');
import React from 'react';

require('styles/components/sectionTwo');
const Gradient = require('../../helpers/Gradient.es.js');

class Section1 extends React.Component {

    startGradient() {

        let gradient = new Gradient({
            // startSelector: '#startColorTwo',
            // endSelector: '#endColorTwo',
            // cssGradientSelector: '.sectionTwoWrapper',
            gradientSpeed: 0.005
        });
    }

    componentDidMount() {
        // this.startGradient();
    }

    render() {
        return (
            <div className="sectionTwoWrapper section-wrapper">
                <div className="page_title">
                    <svg viewBox="0 0 300 30">
                        <defs>
                            <linearGradient id="fire">
                                <stop id="startColorTwo" stopColor="white" offset="0%"/>
                                <stop id="endColorTwo" stopColor="white" offset="100%"/>
                            </linearGradient>
                        </defs>
                        <text text-anchor="middle" x="38%" y="25%" dy="1em" fill="url(#fire)" fontSize="10">art of engineer
                            in
                            <span className="dull">g</span>
                        </text>
                    </svg>
                </div>
            </div>
        )
    }
}


module.exports = Section1;