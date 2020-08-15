import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList/indes';
import Favorires from '../pages/Favorites';
import { Ionicons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          height: 64,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'IndieFlower_400Regular',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d'
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-easel" size={size} color={color} />
            );
          }
        }}
      />
      <Screen
        name="Favorites"
        component={Favorires}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => {
            return (
              <Ionicons name="ios-heart" size={size} color={color} />
            );
          }
        }}
      />

    </Navigator>

  );
}

export default StudyTabs;