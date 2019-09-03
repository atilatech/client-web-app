import React from 'react';
import {Link} from "react-router-dom";
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
    it('renders without crashing', () => {
        shallow(<LandingPage />);
    });

    it('renders welcome message', () => {
        const wrapper = shallow(<LandingPage />);
        const welcome = <h1 className="form-header" style={{marginBottom: 0}}>Easily Find and Apply to Scholarships</h1>;
        // expect(wrapper.contains(welcome)).toBe(true);
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});