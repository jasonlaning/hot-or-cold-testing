import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('Renders the guess form', () => {
		const text = 'Enter your Guess';
		const wrapper = shallow(<GuessForm />);
		expect(wrapper.text()).toEqual(text);
	});

	it('Should fire the onGuess callback when the form is submitted', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const value = '23';
		wrapper.find('input[type="text"]').node.value = value;
		wrapper.simulate('submit');
		expect(callback).toHaveBeenCalledWith(value);
	});
})