const $ = require('jquery');
const Gradient = require('../../../helpers/Gradient.es.js');
const classNames = require('classnames');
import React from 'react';

const styles = require('styles/components/sectionOne');
const commonStyles = require('styles/common');

class Section1 extends React.Component {

    startGradient() {

        let gradient = new Gradient({
            // startSelector: '#startColorOne',
            // endSelector: '#endColorOne',
            cssGradientSelector: ".section-one-gradient",
            gradientSpeed: 0.005
        });
        gradient.start();
    }

    componentDidMount() {
        this.startGradient();
    }

    render() {
        const top = ($(window).height() / 2 ) - 55;
        const localStyles = { top: top };

        return (
            <div className={classNames(commonStyles.sectionWrapper, styles.sectionOneWrapper)}>
                <div className={classNames('section-one-gradient', styles.sectionOneContent)}>
                    <div className={styles.titleWrapper}>
                        <h1 className={styles.title} style={localStyles}>
                            art of engineer
                            <span className={styles.dull}>.</span>
                            in
                            <span className={styles.dull}>g</span>
                        </h1>
                    </div>
                </div>
            </div>
        )
    }
}


module.exports = Section1;