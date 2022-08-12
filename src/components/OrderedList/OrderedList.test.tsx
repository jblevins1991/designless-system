/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ListItem, OrderedList } from '..';

describe('OrderedList Component', () => {
  it('should render', async () => {
    render(
      <OrderedList>
        <ListItem>One</ListItem>
      </OrderedList>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
