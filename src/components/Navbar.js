import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Navbar.scss';
import atilaLogo from './assets/atila-logo-circle-transparent.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authService: {
                isLoggedIn: false
            },
            searchQuery: ''
        };
    }

    componentDidMount() {
        const userImageUrl = localStorage.getItem('userImageUrl');

        if (userImageUrl) {
            this.setState({userImageUrl});
        }
    }

    updateSearch = event => {
        event.preventDefault();
        this.setState({searchQuery: event.target.value});
    };

    render() {

        const {searchQuery, authService} = this.state;

        return (
            <nav className="Navbar container" role="navigation">
                <div className="nav-wrapper atila-blue">
                    <ul className="right hide-on-med-and-down">
                        <a id="logo-container" href={authService.isLoggedIn ? '/scholarship' : ''} className="brand-logo">
                            Atila
                            <img src={atilaLogo} alt="Atila Logo" style={{ height: '100px' }}/>
                        </a>
                        <span>

                                <li>
                                    <input value={searchQuery} className="browser-default" type="text" name="search"
                                           placeholder="Enter to search" onChange={this.updateSearch}/>
                                </li>
                                <li>
                                    <a href="/search" title="Search">
                                            <FontAwesomeIcon icon={faSearch}/>
                                    </a>
                                </li>
                                <li><a href="/blog" title="Blogs">Blog</a></li>
                                <li><a href="/forum" title="Forums">Forum</a></li>
                                <li><a href="/essay" title="Essays">Essays</a></li>
                                <li><a className="atila-blue" href="/team">Team</a></li>
                            </span>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;