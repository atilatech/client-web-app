import React from 'react';
import {Link} from "react-router-dom";
import applicationAutomationGif from './assets/application-automation.gif';
import scholarshipsNotificationsGif from './assets/scholarship-notifications.gif';
import viewEssaysGif from './assets/view-essays.gif';

function MoreFeatures() {

    return (
        <div  className="container">
            <h1 className="col-sm-12 text-center">
                <Link to="/blog/atila/what-is-atila"> More Features </Link>
            </h1>
            <h2  className="col-sm-12 text-center">
                Stay Woke. <Link to="essay">
                Read Essays. </Link> <Link to="applications/demo">Automate Applications.</Link></h2>

            <div className="offset-lg-1">
                <div  className="row">
                    <div  className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3 >1. Get Notified when Scholarships are Due 🕐</h3>
                        <p >Save scholarships you are interested in and we'll let you know 7 days and 24 hours before the scholarship is due.</p>
                    </div>
                    <div  className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img  alt="Get Notified when Scholarships are Due" className="landing-page-gif landing-page-gif-mobile" id="scholarship-notifications-gif" src={scholarshipsNotificationsGif} title="Get Notified when Scholarships are Due" />
                    </div>
                </div>
                <div  className="row">
                    <div  className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3 >2. Read Other student's <Link to="essay">Essays</Link> 👫</h3>
                        <p >Read <Link to="essay">essays and past applications</Link> from other students for scholarships and schools you are interested in.</p>
                    </div>
                    <div  className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img  alt="Read Other student's Essays" className="landing-page-gif landing-page-gif-mobile" id="view-essays-gif" src={viewEssaysGif} title="Read Other student's Essays" />
                    </div>
                </div>
                <div  className="row">
                    <div  className="card shadow m-3 p-5 col-lg-4 col-sm-12">
                        <h3 >3. <Link to="applications/demo">Automate</Link> Scholarship Application 💪🏿</h3>
                        <p >Automate the form filling process for web and pdf scholarship applications. Atila will even write your application email for you. 😯</p>
                    </div>
                    <div  className="card shadow m-3 p-3 col-lg-7 col-sm-12">

                        <img  alt="Automate Scholarship Application" className="landing-page-gif landing-page-gif-mobile" id="application-automation-gif" src={applicationAutomationGif} title="Automate Scholarship Application" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreFeatures;
