/**
 * Created by dev on 7/8/16.
 */
const $ = require('jquery');
import React from 'react';
import randomString from 'random-string';

require('styles/components/sectionThree');
const Gradient = require('../../helpers/Gradient.es.js');

class PageTitle extends React.Component {

    constructor(props) {
        super(props);
        const random = randomString();

        const {titleText} = props;
        this.state = {
            titleText: titleText,
            startSelector: 'startSelector-' + random,
            endSelector: 'endSelector-' + random,
            defID: 'fire-' + random
        };
    }

    startGradient() {
        const self = this;

        let gradient = new Gradient({
            startSelector: '#' + self.state.startSelector,
            endSelector: '#' + self.state.endSelector,
            gradientSpeed: 0.005
        });

        gradient.start();
    }

    componentDidMount() {
        this.startGradient();
    }

    render() {
        const textFillRef = 'url(#' + this.state.defID + ')';
        return (
            <div className="page_title">
                <svg  viewBox="0 0 100 30">
                    <defs>
                        <linearGradient id={this.state.defID}>
                            <stop id={this.state.startSelector} offset="0%"/>
                            <stop id={this.state.endSelector}  offset="100%"/>
                        </linearGradient>
                    </defs>
                    <text x="50"
                          y="10"
                          textAnchor="middle"
                          alignmentBaseline="middle"
                          fill={textFillRef} >
                        {this.state.titleText}
                    </text>
                    <rect height="1"
                          width="10"
                          x="45"
                          y="17"
                          fill="black">

                    </rect>
                </svg>
            </div>
        )
    }
}

module.exports = PageTitle;