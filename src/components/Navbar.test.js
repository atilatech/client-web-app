import React from 'react';
import {Link} from "react-router-dom";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';

describe('<Navbar />', () => {
    it('renders without crashing', () => {
        shallow(<Navbar />);
    });

    it('renders searchLink', () => {
        const wrapper = shallow(<Navbar />);
        const searchLink = <Link to="search" className="nav-item">Search</Link>;
        expect(wrapper.contains(searchLink)).toEqual(true);
    });
});