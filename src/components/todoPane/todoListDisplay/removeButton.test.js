import removeButton from './removeButton.js';
import { render, fireEvent } from '@testing-library/react';

describe('RemoveButton', () => {
	const context = {
		actions: {
			removeTodo: jest.fn(),
		},
		data: Symbol('data'),
	};
	const { actions, data } = context;

	test('idle RemoveButton', () => {
		const component = render(removeButton(context))
			.getByRole('removeButton');

		expect(component).toBeInTheDocument();
	});

	test('Clicking RemoveButton removes a todo from the todoList', () => {
		const component = render(removeButton(context))
			.getByRole('removeButton');

		fireEvent.click(component);

		expect(actions.removeTodo).toHaveBeenCalledWith(data);
	});
});
