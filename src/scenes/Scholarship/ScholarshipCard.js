import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import moment from "moment";
import {formatCurrency} from "../../services/utils";

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
        const { name, description, deadline, funding_amount, slug, img_url } = scholarship;

        let descriptionText = showPreview ? description : `${description.substring(0,100)}`;
        if (!showPreview && description.length > 100) {
            descriptionText +='...'
        }

        const deadlineString = moment(deadline).format('MMMM DD, YYYY');
        const fundingString = formatCurrency(Number.parseInt(funding_amount), true);
        return (
            <div className={`${className} card shadow mb-3`}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={img_url} className="card-img" alt={name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <Link to={`/scholarship/${slug}`}>
                                <h1 className="card-title text-left">{name}</h1>
                            </Link>
                            <p className="card-text">
                                <small className="text-muted">
                                    Deadline: { deadlineString }
                                </small>
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Amount: {fundingString}
                                </small>
                            </p>
                            <p className="card-text">{descriptionText}</p>
                            <button className="btn btn-link" onClick={this.togglePreview} >
                                Show More
                            </button>
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
