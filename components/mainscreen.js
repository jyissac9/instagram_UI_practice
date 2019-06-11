import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import HomeTab from './AppTapNavigator/HomeTab';
import SearchTab from './AppTapNavigator/SearchTab';
import AddMediaTab from './AppTapNavigator/AddMediaTab';
import LikesTab from './AppTapNavigator/LikesTab';
import ProfileTab from './AppTapNavigator/ProfileTab';

const AppTabNavigator = createMaterialTopTabNavigator({
    HomeTab: { screen: HomeTab },
    SearchTab: { screen: SearchTab },
    AddMediaTab: { screen: AddMediaTab },
    LikesTab: { screen: LikesTab },
    ProfileTab: { screen: ProfileTab }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    bounces: true,
    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor:'white',
                }
            })
        },
        iconStyle: { height: 100 },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        upperCaseLabel: false,
        showLabel: false,
        showIcon: true,
    },
});

const AppTabContainer = createAppContainer(AppTabNavigator);

export default class MainScreen extends Component {

    static navigationOptions = {
        headerLeft: <Icon name='ios-camera' style={{ paddingLeft:10 }}/>,
        title: 'Instagram',
        headerTitleStyle: { textAlign: "center", flex: 1 },
        headerRight: <Icon name='ios-send' style={{ paddingRight:10 }}/>,
    }

    render() {
        return <AppTabContainer/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});