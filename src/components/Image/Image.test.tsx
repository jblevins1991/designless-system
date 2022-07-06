/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { render, screen } from '@testing-library/react';
 
 import Image from './Image';

 describe('Image Component', () => {
    it('should render', async () => {
        render(<Image
            alt='Alternate text'
            src='https://styles.redditmedia.com/t5_2r5i1/styles/communityIcon_x4lqmqzu1hi81.jpg'
        />);

        expect(screen.getByRole('figure')).toBeInTheDocument();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
 });