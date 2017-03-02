const $ = require('jquery');
const classNames = require('classnames');
const React = require('react');

const commonStyles = require('styles/common');
const PageTitle = require('../shared/PageTitle.jsx');

class Section extends React.Component {

    render() {
        return (
            <div className={classNames(commonStyles.sectionWrapper)}>
                <PageTitle titleText="Works"></PageTitle>
            </div>
        )
    }
}

module.exports = Section;