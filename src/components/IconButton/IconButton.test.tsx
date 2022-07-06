/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
 import IconButton from './IconButton';

 describe('Code Component', () => {
    it('should render', async () => {
        render(<IconButton icon={null}>
            test
        </IconButton>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });
 });