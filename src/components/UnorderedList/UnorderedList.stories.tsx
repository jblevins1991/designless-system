import * as React from 'react';
import ListItem from '../ListItem/ListItem';

import UnorderedList from './UnorderedList';

export default {
  title: 'Components/UnorderedList',
  component: UnorderedList
};

export const DefualtUnorderedList = () => {
  return (
    <UnorderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
      <ListItem>Three</ListItem>
      <ListItem>Four</ListItem>
    </UnorderedList>
  );
};
