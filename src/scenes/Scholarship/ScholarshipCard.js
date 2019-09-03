import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

class ContentCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showPreview: false,
        }
    }

    togglePreview = (event) => {
        event.preventDefault();

        const { showPreview } = this.state;
        this.setState({ showPreview: !showPreview });

    };



    render() {

        const { className, scholarship } = this.props;
        const { showPreview } = this.state;
        const { title, description, deadline, amount, slug } = scholarship;

        let descriptionText = showPreview ? description : `${description.substring(0,100)}`;
        if (!showPreview && description.length > 100) {
            descriptionText +='...'
        }
        return (
            <div className="card shadow mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16cf8963087%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16cf8963087%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2274.421875%22%20y%3D%22104.65%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={`/scholarship/${slug}`}>
                                <h1 className="card-title text-left">{title}</h1>
                            </Link>
                            <p className="card-text"><small className="text-muted">Deadline: </small></p>
                            <p className="card-text"><small className="text-muted">Amount: </small></p>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ContentCard.defaultProps = {
    className: ''
};

ContentCard.propTypes = {
    className: PropTypes.string,
    scholarship: PropTypes.shape({})
};

export default ContentCard;
