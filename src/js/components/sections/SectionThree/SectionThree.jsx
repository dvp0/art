const classNames = require('classnames');
const React = require('react');

const styles = require('./style');
const commonStyles = require('styles/common');
const PageTitle = require('../../shared/PageTitle.jsx');

class Section extends React.Component {

    render() {
        return (
            <div className={classNames(commonStyles.sectionWrapper)}>
                <PageTitle titleText="About"></PageTitle>
                <div className="well text-center">Coming soon</div>
            </div>
        )
    }
}

module.exports = Section;