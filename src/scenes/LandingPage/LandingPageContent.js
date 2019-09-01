import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import ContentCard from "../../components/ContentCard";

function LandingPageContent({ title, description, contentList }) {

    return (
        <div className="p-5">
            <h1 className="col-sm-12 text-center">
                <Link to={`/${title.toLowerCase()}`}> {title} </Link></h1>
            <h2 className="col-sm-12 text-center">
                {description}
            </h2>
            <div className="row">
                {contentList.map( content => (<ContentCard className="max-width-md-30 m-2"  content={content}/>))}
            </div>
        </div>
    );
}


LandingPageContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.shape({}).isRequired,
    contentList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default LandingPageContent;
