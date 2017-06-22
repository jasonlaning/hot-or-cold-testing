import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {

	const guess = 23;

	it('Renders without crashing', () => {
		shallow(<Game />);
	});

	it('Can add a guess to the state', () => {
		const wrapper = shallow(<Game />);
		wrapper.instance().guess(guess);
		expect(wrapper.state('guesses')).toEqual([guess]);
	});

	it('Can set the feedback after a guess', () => {
		const wrapper = shallow(<Game />);
		const feedback = 'You\'re Hot!';
		wrapper.setState({correctAnswer: 30});
		wrapper.instance().guess(guess);
		expect(wrapper.state('feedback')).toEqual(feedback);
	})

	it('Can reset the state to start a new game', () => {
		const feedback = 'Make your guess!';
		const wrapper = shallow(<Game />);
		wrapper.instance().guess(guess);
		wrapper.instance().newGame();
		expect(wrapper.state('feedback')).toEqual(feedback);
		expect(wrapper.state('guesses')).toEqual([]);
	})

})

