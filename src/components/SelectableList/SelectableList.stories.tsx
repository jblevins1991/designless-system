import * as React from 'react';

import {
    SelectableList,
    SelectableListItem
} from "..";

export default {
    title: 'Components/SelectableList',
    component: SelectableList
};

export const DefaultSelectableList = () => {
    return <SelectableList>
        <SelectableListItem name='one' value='one'>one</SelectableListItem>
        <SelectableListItem name='two' value='two'>two</SelectableListItem>
        <SelectableListItem name='three' value='three'>three</SelectableListItem>
    </SelectableList>;
};
