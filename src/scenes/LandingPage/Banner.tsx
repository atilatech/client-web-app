import React, { useState } from 'react';
import {Button, Input} from "antd";
import {Link, withRouter, RouteComponentProps} from "react-router-dom";
import bannerImage from "./assets/landing-cover-big-scholarship.png";
import {slugify} from "../../services/utils";
import "./Banner.scss";

interface BannerProps extends RouteComponentProps{
    /** Amount to send to destination address before gas fees. */
    className?: string;
}

function Banner(props: BannerProps){

    const { className, history } = props;
    const [searchQuery, setSearchQuery] = useState<string>("");

  const onSubmit = (event: any) => {
    event.preventDefault();
    history.push(`/scholarship/s/${slugify(searchQuery)}`);
  };

  const updateSearch = (event: any) => {
    event.preventDefault();
    event.persist();
    setSearchQuery(event.target.value);

    if (event.key === 'Enter' || event.type === 'click') {
      // the only click event that can trigger updateSearch is when autocomplete item is selected
      history.push(`/scholarship/s/${slugify(event.target.value)}`);
    }

  };

    return (
        <div className="Banner container mt-3">
            <div className="home-page-wrapper banner-wrapper" id="banner">
                <div className="banner-bg-wrapper">
                </div>
                <div className={`${className} page row`}>
                <div
                    className="col-lg-6 col-md-6 col-sm-12"
                    key="text"
                >
                    <h1 key="h1" className="mt-4">
                    Atila
                    </h1>
                    <h2 key="h2" className="text-center">

                    The best way to <br/> start and get scholarships.
                    </h2>
                    <form className="col-sm-12"
                        onSubmit={onSubmit}
                        style={{ height: '300px'}}>
                    <div className="row">
                        <div className="col-sm-12 input-field">
                        <label className="active" id="typeahead-label"
                                style={{ fontSize: '30px' }}
                        />
                        <Input placeholder={"Search by school, city, program, ethnicity or more"}
                                onChange={updateSearch}
                                value={searchQuery}/>
                        </div>
                        <div className="col-sm-12 px-4 my-3">
                        <p className="mb-0">Sample Searches:{' '}
                            <Link to="/scholarship/s/engineering">
                            Engineering</Link>,{' '}
                            <Link to="/scholarship/s/female">
                            Female</Link>,{' '}
                            <Link to="/scholarship/s/ontario">
                            Ontario</Link>,{' '}
                            <Link to="/scholarship/s/toronto">
                            Toronto</Link>,{' '}
                            <Link to="/scholarship/s/black">
                            Black</Link> ,{' '}
                            <Link to="/scholarship/s/medical+school">
                            Medical School</Link>{' '},
                            <Link to="/scholarship/s/University+of+Western+Ontario">
                            University of Western Ontario</Link>
                        </p>
                        </div>
                        <Button type="primary"
                                className="center-block mt-3">
                        <Link to="/scholarship">
                            Find Scholarships
                        </Link>
                        </Button>
                        <Button type="primary"
                                className="center-block my-3">
                        <a href="http://atila.ca/start" target="_blank" rel="noreferrer">
                            Start a Scholarship
                        </a>
                        </Button>
                    </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-center" key="image">
                    <img src={bannerImage}
                        className="col-12" alt="Big cheque" />
                </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Banner);
