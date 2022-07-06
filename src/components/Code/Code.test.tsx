/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import Code from './Code';

 describe('Code Component', () => {
    it('should render', async () => {
        render(<Code
            copyIcon={null}
            id='ts'
            language='Typescript'
        >
            {`
                code
            `}
        </Code>);

        expect(screen.getByRole('code')).toBeInTheDocument();
    });
 });