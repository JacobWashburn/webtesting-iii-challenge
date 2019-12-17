// Test away
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Dashboard from '../dashboard/Dashboard';
import '@testing-library/jest-dom/extend-expect';

test('dashboard renders without crashing', () => {
    render(<Dashboard/>);
});

test('when gate is closed and unlocked', () => {
    const {getByText} = render(<Dashboard/>);
    getByText(/^open gate$/i);
    getByText(/^closed$/i);
    getByText(/^unlocked$/i);
    getByText(/^lock gate$/i);
});

test('when gate is open', () => {
    const {getByText} = render(<Dashboard/>);
    const button = getByText(/^open gate$/i);
    fireEvent.click(button);
    getByText(/^close gate$/i);
    getByText(/^open$/i);
    getByText(/^unlocked$/i);
    expect(getByText(/^lock gate$/i)).toBeDisabled();
});

test('when gate is locked', () => {
    const {getByText} = render(<Dashboard/>);
    const button = getByText(/^lock gate$/i);
    fireEvent.click(button);
    getByText(/^closed$/i);
    getByText(/^locked$/i);
    getByText(/^unlock gate$/i);
    expect(getByText(/^open gate$/i)).toBeDisabled();
});
