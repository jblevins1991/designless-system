/**
 * @jest-environment jsdom
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { ListItem, UnorderedList } from '..';

describe('UnorderedList Component', () => {
  it('should render', async () => {
    render(
      <UnorderedList>
        <ListItem>One</ListItem>
      </UnorderedList>
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});
