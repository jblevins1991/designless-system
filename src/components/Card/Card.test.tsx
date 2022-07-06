/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import Card from './Card';

 describe('Card Component', () => {
    it('should render', async () => {
        render(<Card>something</Card>);

        expect(screen.getByText('something')).toBeInTheDocument();
    });
 });