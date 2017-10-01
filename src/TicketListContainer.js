import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { StackNavigator } from 'react-navigation';

import ListsHome from './Views/list_home';
import ListsDetails from './Views/list_detail';

const ListsTabView = ({ navigation }) => (
  <ListsHome ticketTitle="首页" navigation={navigation} />
);

const ListsDetailTabView = ({ navigation }) => (
  <ListsDetails ticketTitle="工单详情" navigation={navigation} />
);

const ListsTab = StackNavigator({
  Home: {
    screen: ListsTabView,
    path: '/',
    navigationOptions: () => ({
      title: '首页',
    }),
  },
  Lists_Detail: {
    screen: ListsDetailTabView,
    path: 'lists_detail',
    navigationOptions: {
      title: '工单详情',
    },
  },
});

export default ListsTab;
