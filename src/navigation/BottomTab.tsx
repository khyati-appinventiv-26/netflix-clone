import React from 'react';
import { Image, Text, View } from 'react-native';
import Home from '../screens/Home';
import NewsHot from '../screens/NewsHot';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons } from '../assets';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: 'black', borderColor: 'black' },
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white',
                    },
                    tabBarIcon: ({ size, focused }) => (
                        <Image
                            style={{
                                width: size,
                                height: size,
                                tintColor: focused ? 'white' : 'grey',
                            }}
                            source={Icons.home}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? 'white' : 'grey' }}>
                            Home
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="News"
                component={NewsHot}
                options={{
                    title: "News & Hot",
                    tabBarIcon: ({ size, focused }) => (
                        <Image
                            style={{
                                width: size,
                                height: size,
                                tintColor: focused ? 'white' : 'grey',
                            }}
                            source={Icons.play}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? 'white' : 'grey' }}>
                            News & Hot
                        </Text>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: 'My Netflix',
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image
                                style={{ width: size, height: size }}
                                source={{uri : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'}}
                            />
                        );
                    },
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ color: focused ? 'white' : 'grey' }}>
                            My Netflix
                        </Text>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
