import {Helmet} from "react-helmet";
import PropTypes from 'prop-types';
import React from "react";
import $ from 'jquery';

export const defaultSeoContent = {
    title: 'Atila - Get more money for school. Easily find and apply to scholarships.',
    description: 'Get more money for school. Easily find and apply to scholarships.',
    image: 'https://firebasestorage.googleapis.com/' +
        'v0/b/atila-7.appspot.com/o/public%2Fatila-landing-page-october-11-2019.png' +
        '?alt=media&token=f0cc7224-86f7-4365-9ff1-b53034ada0ad',
    slug: ''
};

function HelmetSeo({content}) {

    try {
        if (process.env.NODE_ENV !=='test' && $) {
            $('meta[property="og:url"]').attr('content', window.location.href);
            $('meta[property="og:type"]').attr('content', content.type);
            $('meta[property="og:description"]').attr('content', content.description);
            $('meta[property="og:image"]').attr('content', content.image);


            $('meta[itemprop="name"]').attr('content', content.title);
            $('meta[itemprop="description"]').attr('content', content.description);
            $('meta[itemprop="image"]').attr('content', content.image);

            $('meta[name="twitter:title"]').attr('content', content.title);
            $('meta[name="twitter:description"]').attr('content', content.description);
            $('meta[name="twitter:image"]').attr('content', content.image);

        }
    }
    catch (e) {
        console.warn({e});
    }

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{content.title} - Atila</title>
            <meta name="Description" content={content.description} />

            <meta property="og:title" content={content.title} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:type" content={content.type} />
            <meta property="og:description" content={content.description} />
            <meta property="og:image" content={content.image} />

            <meta itemProp="name" content={content.title} />
            <meta itemProp="description" content={content.description} />
            <meta itemProp="image" content={content.image} />
            <meta property="og:type" content="article" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@atilatech" />
            <meta name="twitter:title" content={content.title} />
            <meta name="twitter:description" content={content.description} />
            <meta name="twitter:image" content={content.image} />

        </Helmet>

    )
}

HelmetSeo.propTypes = {
    content: PropTypes.shape({}).isRequired,
};

export default HelmetSeo;