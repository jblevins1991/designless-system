/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
 import Link from './Link';

 const eventHandlers = {
     // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
     onBlur: (event: React.FocusEvent<HTMLAnchorElement>) => {},
     // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
     onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {},
     // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
     onFocus: (event: React.FocusEvent<HTMLAnchorElement>) => {},
 };

 describe('Card Component', () => {
    it('should render', async () => {
        render(<Link href='https://www.google.com'>Google</Link>);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should render with http urls', async () => {
        render(<Link href='http://www.google.com'>Google</Link>);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('should contain the link class', () => {
        render(<Link href='https://www.google.com'>Google</Link>);

        expect(screen.getByRole('link').classList).toContain('link');
    });

    it('should contain the link class', () => {
        render(<Link variant='button' href='https://www.google.com'>Google</Link>);

        expect(screen.getByRole('link').classList).toContain('link');
        expect(screen.getByRole('link').classList).toContain('button');
    });

    it('should focus the button when the user tabs out of it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onFocus');

        render(<Link
            href={'https://www.google.com'}
            onFocus={eventHandlers.onFocus}
        >
            Test
        </Link>);

        await user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it('should blur the button when the user tabs out of it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onBlur');

        render(<Link
            href={'https://www.google.com'}
            onBlur={eventHandlers.onBlur}
        >
            Test
        </Link>);

        await user.tab();
        await user.tab();

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it('should fire the on click event when the user clicks on it', async () => {
        const user = userEvent.setup();
        const eventSpy = jest.spyOn(eventHandlers, 'onClick');

        render(<Link
            href={'https://www.google.com'}
            onClick={eventHandlers.onClick}
        >
            Test
        </Link>);

        await user.click(screen.getByRole('link'));

        expect(eventSpy).toHaveBeenCalledTimes(1);
    });

    it('should emit a console.error if no protocol is provided', async () => {
        const consoleSpy = jest.spyOn(console, 'error');

        render(<Link
            href={'www.google.com'}
        >
            Test
        </Link>);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
 });