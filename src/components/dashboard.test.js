import React from 'react';
import Dashboard from './dashboard.js';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Dashboard component', () => {
  it('Renders without crashing', () => {
    render(<Dashboard />);
  });
});