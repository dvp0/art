const $ = require('jquery');
import React from 'react';

require('styles/components/sectionOne');
const Gradient = require('../../helpers/Gradient.es.js');

class Section1 extends React.Component {

    startGradient() {

        let gradient = new Gradient({
            startSelector: '#startColorOne',
            endSelector: '#endColorOne',
            cssGradientSelector: '.sectionOneWrapper',
            gradientSpeed: 0.005
        });
    }

    componentDidMount() {
        this.startGradient();
    }

    render() {
        return (
            <div className="sectionOneWrapper section-wrapper">
                <div className="white-background">
                    <div className="title">
                            <svg viewBox="0 0 300 30">
                                <defs>
                                    <linearGradient id="fire">
                                        <stop id="startColorOne" stopColor="white" offset="0%"/>
                                        <stop id="endColorOne" stopColor="white" offset="100%"/>
                                    </linearGradient>
                                </defs>
                                <text text-anchor="middle" x="38%" y="25%" dy="1em" fill="url(#fire)" fontSize="10">art of engineer
                                    in
                                    <span className="dull">g</span>
                                </text>
                            </svg>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = Section1;