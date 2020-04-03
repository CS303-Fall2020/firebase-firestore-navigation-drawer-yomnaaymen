import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Profile from '../screens/profile';
import Header1 from '../components/header1'

const screens = {
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            headerLeft: null,
            headerRight: () => <Header1 />,

            headerStyle: {
                backgroundColor:'#CC6600',
            }
        }
    },
   
}

const ProfileStack = createStackNavigator(screens);

export default ProfileStack; 