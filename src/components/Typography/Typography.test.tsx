/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import Typography from './Typography';

 describe('Typography Component', () => {
    it.skip('should render paragraph by default', async () => {
        render(<Typography>
            text
        </Typography>);

        expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });

    it('should render h1', async () => {
        render(<Typography variant='h1'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render h2', async () => {
        render(<Typography variant='h2'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render h3', async () => {
        render(<Typography variant='h3'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render h4', async () => {
        render(<Typography variant='h4'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render h5', async () => {
        render(<Typography variant='h5'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('should render h6', async () => {
        render(<Typography variant='h6'>
            text
        </Typography>);

        expect(screen.getByRole('heading')).toBeInTheDocument();
    });
 });