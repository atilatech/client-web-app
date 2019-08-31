import React from 'react';
import {Link} from "react-router-dom";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Footer from './Footer';

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />);
    });

    it('renders blogLink', () => {
        const wrapper = shallow(<Footer />);
        const blogLink = <Link to="blog">
            Blog
        </Link>;
        expect(wrapper.contains(blogLink)).toEqual(true);
    });
});