import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {

	it('Renders without crashing', () => {
		shallow(<InfoModal />);
	});

	it('Renders the title', () => {
		const title = 'What do I do?';
		const wrapper = shallow(<InfoModal />);
		expect(wrapper.contains(<h3>{title}</h3>)).toEqual(true);
	});

	it('Should fire the onClose callback when the close link is clicked', () => {
		const callback = jest.fn();
		const wrapper = mount(<InfoModal onClose={callback} />);
		wrapper.find('.close').simulate('click');
		expect(callback).toHaveBeenCalled();
	});

})