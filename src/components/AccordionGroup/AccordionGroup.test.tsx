/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
 import AccordionGroup from './AccordionGroup';
import Accordion from '../Accordion/Accordion';

 describe('AccordionGroup Component', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render', async () => {
        render(<AccordionGroup>
            <Accordion title='Title'>
                Content
            </Accordion>
        </AccordionGroup>);

        await screen.findByRole('button');
        await screen.findByText(/Title/i);

        await screen.findByText(/Content/i);
    });

    it('should close one when another is opened', async () => {
        const user = userEvent.setup();

        render(<AccordionGroup>
            <Accordion title='Title 1'>
                Content 1
            </Accordion>
            <Accordion title='Title 2'>
                Content 2
            </Accordion>
        </AccordionGroup>);

        await user.click(screen.getAllByRole('button')[0]);

        expect((await screen.findByText(/Content 1/i)).classList).toContain('visible');

        await user.click(screen.getAllByRole('button')[1]);

        expect((await screen.findByText(/Content 1/i)).classList).toContain('hidden');
        expect((await screen.findByText(/Content 2/i)).classList).toContain('visible');
    });
 })