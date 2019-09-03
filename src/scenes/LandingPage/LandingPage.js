import React from 'react';
import {Link} from "react-router-dom";

import './LandingPage.scss';
import HowItWorks from "./HowItWorks";
import MoreFeatures from "./MoreFeatures";
import LandingPageContent from "./LandingPageContent";
import LandingPageLiveDemo from "./LandingPageLiveDemo";
import {genericItemTransform} from "../../services/utils";

let blogs = [
    {
        'title': 'How to Get a Summer Internship',
        'user': {
            'first_name': 'Trevor',
            'last_name': 'Sookraj',
            'username': 'trevorsookraj',
            'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F629%2Fprofile-pictures%2Ftrevor-sookraj.jpg?alt=media&token=ebf88b32-8a18-4bd5-83e6-d33fcf112a9d',
            'title': '',
            'post_secondary_school': 'Western University',
            'secondary-school': '',
            'id': 629
        },
        'slug': 'how-to-get-a-summer-internship',
        'description': 'Students generally have limited work experience, so it may seem impossible to get an internship. Through this process, I faced a few obstacles to getting an internship and learned how to overcome them. Here is what I learned',
        'header_image_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/blogs%2F20%2Fheader_image_url%2Fshopify-internship.jpg?alt=media&token=f391b5d5-c55e-4424-a870-98786189e9d6',
        'id': 20
    },
    {
        'id': 13,
        'title': 'Getting into Medical School Without a Degree, Advice for Pre Med Students, Work Life Balance and Self Care - Emily Chen - Atila TV 001',
        'slug': 'getting-into-medical-school-without-a-degree-advice-for-pre-med-students-work-life-balance-and-self-care-emily-chen-atila-tv-001',
        'alternate_slugs': [],
        'date_created': '2018-10-25T12:36:58.298444Z',
        'description': 'Emily Chen shares how she got into U of T medical school without a degree, advice for students studying pre med programs and the importance of work life balance and self care.',
        'header_image_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/blogs%2F13%2Fheader_image_url%2Fpasted%20image%200.png?alt=media&token=82d01850-c040-4c68-8847-1842f54ef75a',
        'published': true,
        'up_votes_count': 0,
        'down_votes_count': 0,
        'up_votes_id': [],
        'down_votes_id': [],
        'metadata': {},
        'user': {
            'first_name': 'Tomiwa',
            'last_name': 'Ademidun',
            'username': 'tomiwa',
            'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F1%2Fprofile-pictures%2Ffacebook-profile-picture.jpg?alt=media&token=8754c657-bbdc-4d8e-ae1d-d4047ac09c6d',
            'title': 'Software Engineering Student',
            'post_secondary_school': 'University of Western Ontario',
            'secondary-school': '',
            'id': 1
        },
        'contributors': []
    },
    {
        'id': 19,
        'title': 'Bain Consulting, RBC Investment Banking, Ivey Business School and Why he declined Goldman Sachs: Paul Okundaye — Atila TV 006',
        'slug': 'bain-consulting-rbc-investment-banking-ivey-business-school-and-why-he-declined-goldman-sachs-paul-okundaye-atila-tv-006',
        'alternate_slugs': [],
        'date_created': '2019-03-21T14:22:30.682253Z',
        'description': 'Paul is an incoming management consultant at Bain and Company.' +
        ' Before that he was an investment banking summer analyst at RBC after declining an interview at Goldman Sachs and founder of ' +
        'a food delivery company called Dine Easy. ' +
        'He is currently in his final year in the honours business program at the Ivey Business School.',
        'header_image_url': 'https://cdn-images-1.medium.com/max/1600/0*h479gzY6kiJje0AH',
        'user': {
            'user': 608,
            'first_name': 'Aurorita',
            'last_name': 'Mahbub',
            'username': 'auroritam',
            'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F608%2Fprofile-pictures%2FIMG_3146.jpg?alt=media&token=9086848b-ec09-4b39-ad7a-58893519bcbf',
            'title': '',
            'profile_description': '',
            'secondary_school': '',
            'post_secondary_school': '',
            'public_metadata': {}
        },
        'contributors': []
    },
];
let essays = [
        {
            'title': 'Ivey AEO2 Activity Report 2017',
            'user': {
                'first_name': 'Carol',
                'last_name': 'Li',
                'username': 'carolli',
                'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/' +
                'user-profiles%2F633%2Fprofile-pictures%2Fcarol-li.jpg?alt=media&token=c773b2f0-1275-4ec6-b4f0-e13388aa47c8',
                'title': '',
                'post_secondary_school': 'Ivey Business School',
                'secondary-school': '',
                'id': 633
            },
            'slug': 'ivey-aeo2-activity-report-2017',
            'description': 'My AEO2 activity report for Ivey Business School. ' +
            'This is a report of extra curricular activities I participated in while in university in the AEO program ' +
            'as part of my progression requirements for starting the HBA program in 3rd year.',
            'id': 8,
            'essay_source_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/' +
            'user-profiles%2F1%2Fessays%2F8%2FIvey%20AEO2%20Activity%20Report.pdf?alt=media&token=84488d88-074e-46a1-8d07-a15b386ac059'
        },
        {
            'id': 5,
            'title': 'Next36 Application 2018',
            'slug': 'next36-application-2018',
            'date_created': '2019-03-27T15:04:15Z',
            'description': 'My application for the Next36, an accelerator for young entrepreneurs in Canada. Me and my startup, ' +
            'The Path were selected to participate in the program.',
            'status': 'accepted',
            'status_other': '',
            'essay_source_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F1%2Fessays%2F5%2FNext%2036%20App.pdf?alt=media&token=0a2a07ae-05f2-4ee9-ae5c-5b31044489fe',
            'published': true,
            'up_votes_count': 0,
            'down_votes_count': 0,
            'up_votes_id': [],
            'down_votes_id': [],
            'metadata': {},
            'user': {
                'first_name': 'Trevor',
                'last_name': 'Sookraj',
                'username': 'trevorsookraj',
                'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/user-profiles%2F629%2Fprofile-pictures%2Ftrevor-sookraj.jpg?alt=media&token=ebf88b32-8a18-4bd5-83e6-d33fcf112a9d',
                'title': '',
                'post_secondary_school': '',
                'secondary-school': '',
                'id': 629
            },
            'contributors': []
        },
        {
            'id': 7,
            'title': 'LORAN SCHOLARS PROGRAM Application 2014',
            'slug': 'loran-scholars-program-application-2014-',
            'date_created': '2019-03-27T16:11:50Z',
            'description': 'My application for the 2014 Loran Scholars program. I was not selected for this award.',
            'status': 'declined',
            'status_other': '',
            'essay_source_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/' +
            'user-profiles%2F1%2Fessays%2F7%2FLoran%20Application.pdf.pdf?alt=media&token=3a5f73fd-9259-429b-a981-fffc8f3df03f',
            'published': true,
            'up_votes_count': 0,
            'down_votes_count': 0,
            'up_votes_id': [],
            'down_votes_id': [],
            'metadata': {},
            'user': {
                'first_name': 'Paul',
                'last_name': 'Okundaye',
                'username': 'OkPaul',
                'profile_pic_url': 'https://firebasestorage.googleapis.com/v0/b/atila-7.appspot.com/o/' +
                'user-profiles%2F626%2Fprofile-pictures%2Fpaul-profile-picture.png?alt=media&token=60650357-56f2-4a97-8416-08b08fbbc4aa',
                'title': '',
                'post_secondary_school': '',
                'secondary-school': '',
                'id': 626
            },
            'contributors': []
        }
    ];

blogs = blogs.map(content => genericItemTransform(content));
essays = essays.map(content => genericItemTransform(content));

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
            <React.Fragment>
            <div className="background-image pt-5 pb-3">

                        <h1 className="form-header" style={{marginBottom: 0}}>Easily Find and Apply to Scholarships</h1>


                <form className="col-sm-12 p-3 search-box"
                      onSubmit={this.onSubmit}>
                    <div className="row justify-content-center preview-questions ng-star-inserted">

                        <div className="search-box">

                            <div className="col-sm-12 input-field">
                                <label className="active" id="typeahead-label"
                                       style={{ fontSize: '30px', caretColor: 'white', color: 'white',}}
                                />
                                <input aria-multiline="false" autoCapitalize="off"
                                       className="form-control" id="typeahead-config"
                                       type="text" tabIndex="0" placeholder="Enter a search term"
                                       name="searchString"
                                       aria-autocomplete="list" aria-expanded="false"
                                       onChange={this.updateSearch}/>
                            </div>
                            <div className="col-sm-12 pt-3">
                                <p style={{color: 'white'}}>Sample Searches:{' '}
                                    <Link to="/scholarship?q=engineering">
                                        Engineering</Link>,{' '}
                                   <Link to="/scholarship?q=female">
                                        Female</Link>,{' '}
                                   <Link to="/scholarship?q=ontario">
                                        Ontario</Link>,{' '}
                                   <Link to="/scholarship?q=toronto">
                                        Toronto</Link>,{' '}
                                   <Link to="/scholarship?q=black">
                                        Black</Link> ,{' '}
                                   <Link to="/scholarship?q=medical%20school">
                                        Medical School</Link>{' '}
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
            <HowItWorks />
            <hr/>
            <MoreFeatures />
            <hr/>
            <LandingPageContent
                title={'Blog'}
                description={"Learn from other students' stories"}
                contentList={blogs} />
            <hr/>
            <LandingPageContent
                title={'Essays'}
                description={"Read the essays that got students acceptance to top schools and win major scholarships."}
                contentList={essays} />
                <hr />
            <LandingPageLiveDemo />
            </React.Fragment>
    );
    }
}

export default LandingPage;
