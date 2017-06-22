import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {

	it('Renders without crashing', () => {
		shallow(<Header />);
	});

	it('Renders the title', () => {
		const title = 'HOT or COLD';
		const wrapper = shallow(<Header />);
		expect(wrapper.contains(<h1>{title}</h1>)).toEqual(true);
	});

	it('Can toggle the info modal in the state', () => {
		const wrapper = shallow(<Header />);
		wrapper.instance().toggleInfoModal();
		expect(wrapper.state('showInfoModal')).toEqual(true);
	});

})