import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
	const seedList = [2, 3, 49, 32];
	const listText = '234932';

	it('Renders without crashing', () => {
		shallow(<GuessList guesses={seedList} />);
	});

	it('Renders the guess list', () => {
		const wrapper = shallow(<GuessList guesses={seedList} />);
		expect(wrapper.text()).toEqual(listText);
	});

})