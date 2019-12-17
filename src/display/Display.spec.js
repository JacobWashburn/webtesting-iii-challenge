// Test away!
// Test away!
import React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Display from './Display';


test('controls renders without crashing', () => {
    render(<Display/>);
});