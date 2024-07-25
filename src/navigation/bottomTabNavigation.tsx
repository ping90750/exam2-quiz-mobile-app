import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LeaderboardsScreen from '../screens/leaderboards';
import QuestionsScreen from '../screens/questions';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ed9325',
      }}>
      <Tab.Screen
        name="Questions"
        component={QuestionsScreen}
        options={{
          tabBarLabel: 'Questions',
        }}
      />
      <Tab.Screen
        name="Leaderboards"
        component={LeaderboardsScreen}
        options={{
          tabBarLabel: 'Leaderboards',
        }}
      />
    </Tab.Navigator>
  );
}
