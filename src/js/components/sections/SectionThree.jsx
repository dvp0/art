/**
 * Created by dev on 7/8/16.
 */
const $ = require('jquery');
import React from 'react';

require('styles/components/sectionThree');
const PageTitle = require('../shared/PageTitle.jsx');

class Section extends React.Component {

    render() {
        return (
            <div className="sectionThreeWrapper section-wrapper">
                <PageTitle titleText="About"></PageTitle>
            </div>
        )
    }
}

module.exports = Section;