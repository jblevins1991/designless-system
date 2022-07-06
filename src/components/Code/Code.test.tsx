/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
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

        expect(screen.getByText('code')).toBeInTheDocument();
    });

    it('should copy the code contents to clipboard', async () => {
        const user = userEvent.setup();
        const copySpy = jest.spyOn(navigator.clipboard, 'writeText');

        render(<Code
            copyIcon={null}
            id='ts'
            language='Typescript'
        >
            {`
                code
            `}
        </Code>);

        await user.click(await screen.findByRole('button'));

        expect(copySpy).toHaveBeenCalledTimes(1);
    });
 });