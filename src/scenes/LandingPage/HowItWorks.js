import React from 'react';
import {Link} from "react-router-dom";
import createProfileGif from './assets/create-profile.gif';
import registrationGif from './assets/registration.gif';
import viewScholarshipsGif from './assets/view-scholarships.gif';

function HowItWorks() {

    return (
        <div className="container">
            <h1 className="col-sm-12 text-center">
                <Link to="/blog/atila/what-is-atila"> How Atila Works </Link></h1>
            <h5 className="col-sm-12 text-center"> 
                <Link to="register">Make an account.</Link> Find Scholarships. Apply </h5>
            <div className="offset-lg-1">
                <div className="row">
                    <div className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3>1. Make an Account 👆🏽</h3>
                        <p><Link to="register">Register</Link> for a free account in 15 seconds.</p>
                    </div>
                    <div className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img src={registrationGif} id="registration-gif"
                             alt="Atila Registration Walkthrough" title="Atila Registration Walkthrough"
                             className="landing-page-gif landing-page-gif-desktop" />
                    </div>
                </div>
                <div className="row">
                    <div className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3>2. Create Your Profile 🙎🏾‍♀️</h3>
                        <p>Tell us the schools and programs you are interested in.</p>
                    </div>
                    <div className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img src={createProfileGif} id="create-profile-gif"
                             alt="Create Your Profile" title="Create Your Profile"
                             className="landing-page-gif landing-page-gif-mobile" />
                    </div>
                </div>
                <div className="row">
                    <div className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3>3. Find Your Scholarships 👀</h3>
                        <p>Get matched with scholarships that are customized just for you based on your profile.</p>
                    </div>
                    <div className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img src={viewScholarshipsGif} id="view-scholarships-gif"
                             alt="Find Your Scholarships" title="Find Your Scholarships"
                             className="landing-page-gif landing-page-gif-mobile" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
