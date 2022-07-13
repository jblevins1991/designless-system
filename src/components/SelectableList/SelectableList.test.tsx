/**
 * @jest-environment jsdom
 */
 import * as React from 'react';
 import { getByRole, render, screen } from '@testing-library/react';
 import userEvent from '@testing-library/user-event';
 
 import {
    SelectableListItem,
    SelectableList
 } from '..';

 describe('Selectable List', () => {
    it('should render', () => {
        render(<SelectableList>
            <SelectableListItem name='one' value='one'>one</SelectableListItem>
            <SelectableListItem name='two' value='two'>two</SelectableListItem>
            <SelectableListItem name='three' value='three'>three</SelectableListItem>
        </SelectableList>);

        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('should have aria-current on the focused list item', async () => {
        const user = userEvent.setup();

        render(<SelectableList>
            <SelectableListItem name='one' value='one'>one</SelectableListItem>
            <SelectableListItem name='two' value='two'>two</SelectableListItem>
            <SelectableListItem name='three' value='three'>three</SelectableListItem>
        </SelectableList>);

        await user.tab();
        await user.keyboard('ArrowDown');

        const firstListItem = screen.getAllByRole('listitem')[0];
        const firstListItemButton = screen.getAllByRole('button')[0];

        expect(firstListItem.getAttribute('aria-current')).toEqual('true');
        expect(firstListItemButton).toHaveFocus();
    });

    it('should navigate to the next item', async () => {});

    it('should navigate to the previous item', async () => {});

    it('should navigate to the last item', async () => {
        const user = userEvent.setup();

        render(<SelectableList>
            <SelectableListItem name='one' value='one'>one</SelectableListItem>
            <SelectableListItem name='two' value='two'>two</SelectableListItem>
            <SelectableListItem name='three' value='three'>three</SelectableListItem>
        </SelectableList>);

        await user.tab();
        await user.keyboard('End');

        const listItems = screen.getAllByRole('listitem');
        const lastListItem = listItems[listItems.length - 1];
        const lastListItemButton = screen.getAllByRole('button')[listItems.length - 1];

        // expect(lastListItem.getAttribute('aria-current')).toEqual('true');
        expect(lastListItemButton).toHaveFocus();
    });

    it('should navigate to the first item', async () => {
        const user = userEvent.setup();

        render(<SelectableList>
            <SelectableListItem name='one' value='one'>one</SelectableListItem>
            <SelectableListItem name='two' value='two'>two</SelectableListItem>
            <SelectableListItem name='three' value='three'>three</SelectableListItem>
        </SelectableList>);

        await user.tab();
        await user.keyboard('End');
        await user.keyboard('Home');

        const firstListItem = screen.getAllByRole('listitem')[0];
        const firstListItemButton = screen.getAllByRole('button')[0];

        expect(firstListItem.getAttribute('aria-current')).toEqual('true');
        expect(firstListItemButton).toHaveFocus();
    });

    it('should return focus to the list', async () => {});

    it('should select an item', async () => {});

    it('should de-select an item', async () => {});

    it('should not focus a list item when disabled', async () => {});
 });