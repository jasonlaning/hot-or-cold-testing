import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {

	it('Renders without crashing', () => {
		shallow(<TopNav />);
	});

	it('Renders the navigation links', () => {
		const navLinks = 'What?+ New Game';
		const wrapper = shallow(<TopNav />);
		expect(wrapper.text()).toEqual(navLinks);
	});

	it('Should fire the onNewGame callback when the New Game link is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onNewGame={callback} />);
		wrapper.find('.new').simulate('click');
		expect(callback).toHaveBeenCalled();
	});

	it('Should fire the onInfo callback when the Info link is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<TopNav onInfo={callback} />);
		wrapper.find('.what').simulate('click');
		expect(callback).toHaveBeenCalled();
	});

})