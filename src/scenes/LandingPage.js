import React from 'react';
import {Link} from "react-router-dom";

import './LandingPage.scss';

class LandingPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            model: null,
            searchQuery: '',
        }
    }
    onSubmit = event => {

    };

    updateSearch = event => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    };

    render () {
        const  { searchQuery } = this.state;

        return (
            <div className="background-image">
                <div className="preview-form container">
                    <form className="col-sm-12 p-3"
                    onSubmit={this.onSubmit}>

                        <h1 className="form-header" style={{marginBottom: 0}}>Find Your Scholarships</h1>
                        <div className="row justify-content-center preview-questions ng-star-inserted">

                        <div className="search-box">

                            <div className="col-sm-12 input-field">
                                <app-typeahead _nghost-c9="">
                                    <label className="active" id="typeahead-label"
                                           style={{ fontSize: '30px', caretColor: 'white', color: 'white',}}
                                    />
                                    <input aria-multiline="false" autoCapitalize="off"
                                           className="form-control" id="typeahead-config" 
                                           role="combobox" type="text" tabindex="0" placeholder="Enter a search term" 
                                           name="searchString" 
                                           aria-autocomplete="list" aria-expanded="false"
                                    onChange={this.updateSearch}/>
                                </app-typeahead>
                            </div>
                            <div className="col-sm-12">
                                <p style={{color: 'white'}}>Sample Searches:{' '}
                                    <a href="/scholarship?q=engineering" className="ng-star-inserted">
                                        Engineering</a>,{' '}
                                    <a href="/scholarship?q=female" className="ng-star-inserted">
                                        Female</a>,{' '}
                                    <a href="/scholarship?q=ontario" className="ng-star-inserted">
                                        Ontario</a>,{' '}
                                    <a href="/scholarship?q=toronto" className="ng-star-inserted">
                                        Toronto</a>,{' '}
                                    <a href="/scholarship?q=black" className="ng-star-inserted">
                                        Black</a> ,{' '}
                                    <a href="/scholarship?q=medical%20school" className="ng-star-inserted">
                                        Medical School</a>{' '}

                                </p>
                            </div>

                        </div>

                    </div>
                        <div className="" style={{ textAlign: 'center' }}>
                            <button className="btn btn-primary" type="submit">

                                <Link to={`/scholarship?q=${searchQuery}`} className="text-white">
                                    Get My Scholarships
                                </Link>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
    );
    }
}

export default LandingPage;
