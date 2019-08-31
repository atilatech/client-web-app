import React from 'react';
import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faMedium, faLinkedin, faSnapchatGhost, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

function Footer() {
    return (
        <div className="Footer container p-3">
            <div className="row">
                <div className="col lg-6 sm-12">
                    <a href="/blog/atila/what-is-atila" className="white-text" style={{textDecoration: 'underline'}}><h5 >What is Atila?</h5></a>
                    <p className="grey-text text-lighten-4">Atila aims to improve access to education by automating the scholarship application process.
                        <a href="/blog/atila/what-is-atila">Automatically find and apply</a> to scholarships at the click of a button.
                    </p>

                </div>
                <div className="col lg-3 sm-12">
                    <h5 >Explore</h5>
                    <ul>
                        <li><a  href="/blog/atila/what-is-atila">About</a></li>
                        <li><a  href="/team">Team</a></li>
                        <li><a  href="/contact">Contact</a></li>
                        <li>
                            <Link to="blog">
                                Blog
                            </Link>
                        </li>
                        <li><a  href="/forum">Forum</a></li>
                        <li><a  href="/essays">Essays</a></li>
                        <li><a  href="/profile/atilaeng">Engineering</a></li>
                        <li><a href="https://tech.atila.ca" target="_blank">Atila Tech</a></li>
                        <li><a  href="/terms-and-conditions">Terms and Conditions</a></li>
                        <li><a  href="/sitemap">SiteMap</a></li>
                    </ul>
                </div>
                <div className="col lg-3 sm-12">
                    <h5 >Connect</h5>
                    <ul id="connect-links">
                        <li><a  target="_blank" rel="noopener" href="https://www.facebook.com/atilatech1/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCG2iWiYgJYkjBl4EdYGI5mw/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="https://twitter.com/atilatech"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="https://www.instagram.com/atilatech/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="https://www.linkedin.com/company/atila-tech/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="https://medium.com/atila-tech"><FontAwesomeIcon icon={faMedium} /></a></li>
                        <li><a  target="_blank" rel="noopener" href="http://snapchat.com/add/atilatech"><FontAwesomeIcon icon={faSnapchatGhost} /></a></li>

                        {/*Distracting seeing the number of user Likes while working on Atila, adblock it*/}
                        {/*<!--<li name="block-fb-like">-->*/}
                        <li>
                            {/*<!--https://stackoverflow.com/questions/20446818/facebook-like-button-responsive-width-->*/}
                            <iframe name="f2addcfb63a04c" height="1000px" frameBorder="0" allowTransparency="true"
                                    allowFullScreen={true} scrolling="no" title="fb:like Facebook Social Plugin"
                                    src=""
                                    style={{border: 'none', visibility: 'visible', width: '100%', height: '100px'}}
                                    id="lazy-load-fb-like" />
                        </li>
                        <br />
                        <li>
                            <a href="https://twitter.com/atilatech?ref_src=twsrc%5Etfw" className="twitter-follow-button" target="_blank" rel="noopener">
                                Follow @atilatech <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8" />
                        </li> <br />
                        <li>Built By
                            <a href="https://tech.atila.ca" target="_blank" style={{color: '#50eafd !important'}}>Atila Tech</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;
