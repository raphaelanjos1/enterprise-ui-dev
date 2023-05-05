// @vitest-environment happy-dom

import { screen } from '@testing-library/react';
import { renderComponent } from './test/utilities';
import Counter from '.';

test('it should render the component', () => {
  renderComponent(<Counter />);
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test('it should increment when the "Increment" button is pressed', async () => {
  const { user } = renderComponent(<Counter />)
  const currentCount = screen.getByTestId('current-count');
  const incrementButton = screen.getByRole('button', { name: 'Increment' });
  await user.click(incrementButton);
  expect(currentCount).toHaveTextContent('1');
});

test('it should render the component with an initial count', () => {
  renderComponent(<Counter />)
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount).toHaveTextContent('0');
});

test(
  'it should reset the count when the "Reset" button is pressed',
  async () => {
    const { user } = renderComponent(<Counter initialCount={666}/>)
    const currentCount = screen.getByTestId('current-count');
    const resetButton = screen.getByRole('button', { name: /reset/i });
    await user.click(resetButton);
    screen.debug()
    expect(currentCount).toHaveTextContent('0');   
  },
);
