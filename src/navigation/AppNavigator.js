import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/index.js';
import SplashScreen from '../screens/Splash/index.js';
import VideoPlayer from '../screens/VideoPlayer/index.js';
import UpcomingVideo from '../screens/UpcomingVideo/index.js';
import MovieSearch from '../screens/MovieSearch/index.js';
import LoginScreen from '../screens/LoginScreen/index.js';
import SignUpScreen from '../screens/SignUpScreen/index.js';
import BottomTab from './BottomTab.js';
import ForgotPassword from '../screens/ForgotPasswordScreen/index.js';
import TutorialScreen from '../screens/TutorialScreen/index.js';
import { useSelector } from 'react-redux';
import ProfileScreen from '../screens/SelectProfile/index.js';
import DownloadScreen from '../screens/DownloadScreen/index.js';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Tutorial" component={TutorialScreen} />
                <Stack.Screen name="login" component={LoginScreen} />
                <Stack.Screen name="signup" component={SignUpScreen} />
                <Stack.Screen name="bottom" component={BottomTab} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
                <Stack.Screen name="UpVdo" component={UpcomingVideo} />
                <Stack.Screen name="search" component={MovieSearch} />
                <Stack.Screen name="forgot" component={ForgotPassword} />
                <Stack.Screen name="profile-screen" component={ProfileScreen} />
                <Stack.Screen name="down" component={DownloadScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
