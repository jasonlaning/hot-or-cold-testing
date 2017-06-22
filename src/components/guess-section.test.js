import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {

	it('Renders without crashing', () => {
		shallow(<GuessSection />);
	});

	it('Renders the feedback', () => {
		const feedback = 'You Always Lose!';
		const wrapper = shallow(<GuessSection feedback={feedback} />);
		expect(wrapper.contains(feedback)).toEqual(true);
	});

})