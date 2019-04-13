import React from 'react';
import Dashboard from './dashboard.js';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Dashboard component', () => {
  it('Renders without crashing', () => {
    render(<Dashboard />);
  });

  it('render every button', () => {
    const dashboard = render(<Dashboard />);

    const strikeBTN = dashboard.getByTestId('strikeBTN');
    const ballBTN = dashboard.getByTestId('ballBTN');
    const foulBTN = dashboard.getByTestId('foulBTN');
    const hitBTN = dashboard.getByTestId('hitBTN');

    fireEvent.click(strikeBTN);
    fireEvent.click(ballBTN);
    fireEvent.click(foulBTN);
    fireEvent.click(hitBTN);

    expect(strikeBTN).toHaveTextContent(/strike/i);
    expect(ballBTN).toHaveTextContent(/ball/i);
    expect(foulBTN).toHaveTextContent(/foul/i);
    expect(hitBTN).toHaveTextContent(/hit/i);
  });
});