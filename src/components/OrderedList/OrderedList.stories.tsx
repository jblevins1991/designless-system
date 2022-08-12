import * as React from 'react';
import ListItem from '../ListItem/ListItem';

import OrderedList from './OrderedList';

export default {
  title: 'Components/OrderedList',
  component: OrderedList
};

export const DefualtOrderedList = () => {
  return (
    <OrderedList>
      <ListItem>One</ListItem>
      <ListItem>Two</ListItem>
      <ListItem>Three</ListItem>
      <ListItem>Four</ListItem>
    </OrderedList>
  );
};
