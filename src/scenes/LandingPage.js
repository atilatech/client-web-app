import React from 'react';
import logo from '../logo.svg';
import './LandingPage.scss';

function LandingPage() {
    return (
        <div className="LandingPage">
            <header className="LandingPage-header">
                <img src={logo} className="LandingPage-logo" alt="logo" />
                <p>
                    Edit <code>src/LandingPage.js</code> and save to reload.
                </p>
                <a
                    className="LandingPage-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default LandingPage;
