import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import './Footer.scss';

function ContentCard({ className, content }) {

    const { title, description, image, slug } = content;

    return (
        <div className={`${className} card shadow`}>
                <div  className="card-title card-header">
                    <Link  title="How to Get a Summer Internship" to={slug}>
                        {title}
                </Link><p  className="card-subtitle text-muted ng-star-inserted" style={{ fontSize: 'small' }}>
                    Blog
                </p>
                </div><div  className="chip m-3 ng-star-inserted" style={{ width: '200px' }}>
                <img  style={{ maxWidth: '50px' }} src="https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F629%2Fprofile-pictures%2Ftrevor-sookraj.jpg?alt=media&amp;token=ebf88b32-8a18-4bd5-83e6-d33fcf112a9d" />
                    <Link to="/profile/trevorsookraj" >
                        Trevor Sookraj
                    </Link>
            </div>
            <div  className="card-image ng-star-inserted">
                <Link to="/blog/trevorsookraj/how-to-get-a-summer-internship">
                    <img  src={image} />
                </Link>
            </div>
            { description }
                <a  className="card-footer">  Preview</a>
        </div>
    );
}

ContentCard.defaultProps = {
    className: ''
};

ContentCard.propTypes = {
    className: PropTypes.string,
    content: PropTypes.shape({})
};

export default ContentCard;
