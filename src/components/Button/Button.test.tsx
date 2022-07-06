/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const eventHandlers = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onBlur: (event: React.FocusEvent<HTMLButtonElement>) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {},
};

describe('Button Component', () => {
    it('should render', () => {
        render(<Button>Test</Button>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should be a filled primary button by default', () => {
        render(<Button>Test</Button>);

        expect(screen.getByRole('button').classList).toContain('filled');
        expect(screen.getByRole('button').classList).toContain('primary');
        expect(screen.getByRole('button').classList).toContain('medium');
    });

    it('should be a secondary button', () => {
        render(<Button color='secondary'>Test</Button>);

        expect(screen.getByRole('button').classList).toContain('secondary');
    });

    it('should be a tertiary button', () => {
        render(<Button color='tertiary'>Test</Button>);

        expect(screen.getByRole('button').classList).toContain('tertiary');
    });

    it('should be an outlined button', () => {
        render(<Button variant='outlined'>Test</Button>);

        expect(screen.getByRole('button').classList).toContain('outlined');
    });

    it('should be an text button', () => {
        render(<Button variant='text'>Test</Button>);

        expect(screen.getByRole('button').classList).toContain('text');
    });

    it('should focus the button when the user tabs into it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onFocus');

        render(<Button
            onFocus={eventHandlers.onFocus}
        >
            Test
        </Button>);

        user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it.skip('should not focus the button when button is disabled', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onFocus');

        render(<Button
            onFocus={eventHandlers.onFocus}
            disabled={true}
        >
            Test
        </Button>);

        await user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(0);
    });

    it('should blur the button when the user tabs out of it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onBlur');

        render(<Button
            onBlur={eventHandlers.onBlur}
        >
            Test
        </Button>);

        await user.tab();
        await user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it.skip('should not blur the button when button is disabled', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onBlur');

        render(<Button
            onBlur={eventHandlers.onBlur}
            disabled={true}
        >
            Test
        </Button>);

        await user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(0);
    });

    it('should fire the on click event when the user clicks on it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onClick');

        render(<Button
            onClick={eventHandlers.onClick}
        >
            Test
        </Button>);

        await user.click(screen.getByRole('button'));

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it.skip('should not fire the on click event when button is disabled', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onClick');

        render(<Button
            onClick={eventHandlers.onClick}
        >
            Test
        </Button>);

        await user.click(screen.getByRole('button'));

        expect(eventSpy).toHaveBeenCalledTimes(0);
    });
});