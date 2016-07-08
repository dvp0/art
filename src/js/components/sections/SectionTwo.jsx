const $ = require('jquery');
import React from 'react';

require('styles/components/sectionTwo');
const PageTitle = require('../shared/PageTitle.jsx');

class Section extends React.Component {

    render() {
        return (
            <div className="sectionTwoWrapper section-wrapper">
                <PageTitle titleText="Works"></PageTitle>
            </div>
        )
    }
}

module.exports = Section;