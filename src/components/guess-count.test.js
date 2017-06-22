import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders the guess count', () => {
		const count = 3;
		const text = `Guess #${count}!`;
		const wrapper = shallow(<GuessCount count={count} />);
		expect(wrapper.text()).toEqual(text);
	})
})