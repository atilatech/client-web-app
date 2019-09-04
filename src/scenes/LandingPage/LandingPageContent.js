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
            <div className="row ml-md-4">
                {contentList.map( content => (<ContentCard className="max-width-md-30 m-2"
                                                           key={content.title}
                                                           content={content}/>))}
            </div>
        </div>
    );
}


LandingPageContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    contentList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default LandingPageContent;
