import React from 'react';
import BarLoader from 'react-spinners/BarLoader';

import {toTitleCase} from "../../../services/utils";
import ScholarshipCard from "../ScholarshipCard";
import ScholarshipsAPI from "../../../services/ScholarshipsAPI";
class ScholarshipsList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            model: null,
            scholarships: [],
            searchPayload: {
                location: { city :'', province :'', country :'', name :''},
                education_level :[],
                education_field :[],
                searchString: '' ,
                previewMode: 'universalSearch' ,
                filter_by_user_show_eligible_only: true,
                sort_by: 'relevance'
            },
            isLoadingScholarships: false,
            pageNumber: 1,
        }
    }

    loadMoreScholarships = () => {
        const { pageNumber } = this.state;

        this.setState({ pageNumber: pageNumber + 1 }, () => {
            console.log(this.state.pageNumber);
            this.loadScholarships(this.state.pageNumber);
        })
    };

    loadScholarships = (page) => {

        const {
            location : { search }
        } = this.props;

        const { scholarships } = this.state;

        console.log({search});
        const params = new URLSearchParams(search);

        const searchQuery = params.get('q');

        const searchPayload = {...this.state.searchPayload};
        searchPayload.searchString = searchQuery;
        this.setState({ searchPayload });

        this.setState({ isLoadingScholarships: true });

        ScholarshipsAPI.searchScholarships(searchPayload, page)
            .then(res => {
                console.log({ res});

                const scholarshipResults = scholarships;
                scholarshipResults.push(...res.data.data);

                console.log({ scholarshipResults});
                if (scholarshipResults) {
                    this.setState({ scholarships: scholarshipResults });
                }

            })
            .catch(err => {
                console.log({ err});
            })
            .finally(() => {
                console.log('finished!');
                this.setState({ isLoadingScholarships: false });
            });
    }

    componentDidMount() {
        this.loadScholarships();
    }

    render () {
        const {
            location : { search }
        } = this.props;
        const params = new URLSearchParams(search);

        const { scholarships, isLoadingScholarships } = this.state;
        const searchQuery = params.get('q');

        return (
            <div>
                <h1>
                    {searchQuery && `Scholarships for ${toTitleCase(searchQuery)}`}
                    {!searchQuery && 'Scholarships'}
                </h1>

                <div className="container mt-3">
                    {scholarships.map( scholarship => <ScholarshipCard key={scholarship.id} className="col-12" scholarship={scholarship} />)}
                </div>
                {isLoadingScholarships &&
                <div className="text-center">
                    <h5>Loading Image Search Results...</h5>
                    <div className="center-block" style={{ width: '500px' }}>
                        <BarLoader className="center-block"
                                   color={'#0b9ef5'} height={7} width={500}/>
                    </div>
                </div>}

                <button className="btn btn-primary center-block font-size-xl" onClick={this.loadMoreScholarships}>
                    Load More
                </button>
            </div>
        );
    }
}

export default ScholarshipsList;
