/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import {
    Breadcrumb
 } from '..';

 describe('Breadcrumb Component', () => {
    it('should render', async () => {
        render(
            <Breadcrumb url='' />
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
 });