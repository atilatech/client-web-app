import React from 'react';
import {toTitleCase} from "../../../services/utils";
import ScholarshipCard from "../ScholarshipCard";
class ScholarshipsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            model: null,
            scholarships: [
                {
                    title: 'STEM',
                    description: 'STEM is great'
                },
                {
                    title: 'Women in Finance',
                    description: 'Women in Finance is great'
                }
            ]
        }
    }

    componentDidMount() {
        const {
            location : { search }
        } = this.props;

        console.log({search});
    }

    render () {
        const {
            location : { search }
        } = this.props;
        const params = new URLSearchParams(search);

        const { scholarships } = this.state;
        const searchQuery = params.get('q');

        return (
            <div>
                <h1>
                    {searchQuery && `Scholarships for ${toTitleCase(searchQuery)}`}
                    {!searchQuery && 'Scholarships'}
                </h1>

                <div className="container mt-3">
                    {scholarships.map( scholarship => <ScholarshipCard className="col-12" scholarship={scholarship} />)}
                </div>
            </div>
        );
    }
}

export default ScholarshipsList;
