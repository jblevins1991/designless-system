/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
 import Dialog from './Dialog';
import Button from '../Button/Button';

 describe('Dialog Component', () => {
    it('should render', () => {
        render(<>
            <Dialog
                title='Title'
                open={true}
                closeIcon={null}
            >
                Content
            </Dialog>
        </>);

        screen.getByText('Title');
        screen.getByText('Content');
        
        // expect(screen.getByRole('dialog').classList).toContain('hidden');
    });

    // @todo: add more tests
});