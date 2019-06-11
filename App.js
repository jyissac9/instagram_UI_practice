import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './components/mainscreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen
  }
});

export default createAppContainer(AppStackNavigator);
