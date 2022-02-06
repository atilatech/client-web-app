import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faMedium, faLinkedin, faSnapchatGhost, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

function Footer() {
    return (<React.Fragment>
            <hr/>
            <div className="Footer container p-3">
                <div className="row">
                    <div className="col lg-6 sm-12">
                        <Link to="/blog/atila/what-is-atila" className="white-text" style={{textDecoration: 'underline'}}><h2 >What is Atila?</h2></Link>
                        <p className="grey-text text-lighten-4">Atila aims to improve access to education by automating the scholarship application process.
                            <Link to="/blog/atila/what-is-atila">Automatically find and apply</Link> to scholarships at the click of a button.
                        </p>

                    </div>
                    <div className="col lg-3 sm-12">
                        <h2 >Explore</h2>
                        <ul className="pl-0 list-style-type-none">
                            <li><Link to="/blog/atila/what-is-atila">About</Link></li>
                            <li><Link to="/team">Team</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li>
                                <Link to="blog">
                                    Blog
                                </Link>
                            </li>
                            <li><Link to="/forum">Forum</Link></li>
                            <li><Link to="/essays">Essays</Link></li>
                            <li><Link to="/profile/atilaeng">Engineering</Link></li>
                            <li><Link to="https://tech.atila.ca" target="_blank">Atila Tech</Link></li>
                            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
                            <li><Link to="/sitemap">SiteMap</Link></li>
                        </ul>
                    </div>
                    <div className="col lg-3 sm-12">
                        <h2 >Connect</h2>
                        <ul className="connect-links list-style-type-none">
                            <span className="connect-links-icons">
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/atilatech1/">
                                        <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCG2iWiYgJYkjBl4EdYGI5mw/">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://twitter.com/atilatech">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/atilatech/">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/atila-tech/">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="https://medium.com/atila-tech">
                                        <FontAwesomeIcon icon={faMedium} />
                                    </a>
                                </li>
                                <li>
                                    <a  target="_blank" rel="noopener noreferrer" href="http://snapchat.com/add/atilatech">
                                        <FontAwesomeIcon icon={faSnapchatGhost} />
                                    </a>
                                </li>
                            </span>
                            <br />
                            <div className="mt-3">
                                <li className="mt-3">
                                    <Link to="https://instagram.com/atilatech" className="twitter-follow-button" target="_blank" rel="noopener noreferrer">
                                        Follow @atilatech <FontAwesomeIcon icon={faInstagram} />
                                    </Link>
                                </li> <br />
                                <li>Built with <span role="img" aria-label="clock emoji">
                                ❤️
                            </span> By {' '}
                                    <a href="https://atila.ca" target="_blank" style={{color: '#50eafd !important'}} rel="noreferrer" >Atila</a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Footer;
