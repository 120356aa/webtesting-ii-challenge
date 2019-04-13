import React from 'react';
import Display from './display.js';
import Dashboard from './dashboard.js';
import { render, fireEvent } from 'react-testing-library';
import "jest-dom/extend-expect";

describe('Display Component', () => {
  it('Renders without crashing', () => {
    render(<Display />);
  });

  it('Displays the strike counter', () => {
    const display = render(<Display />);
    const strike = display.getByTestId(/strikes/i);
    expect(strike).toHaveTextContent(0);
  });

  it('Add strike count when clicked', () => {
    const dashboard = render(<Dashboard />);
    const strikeBTN = dashboard.getByTestId('strikeBTN');

    fireEvent.click(strikeBTN);

    const display = render(<Display />);
    const strike = display.getByTestId(/strikes/i);

    expect(strike).toHaveTextContent('1');
  });
});