import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/index.tsx';
import VideoPlayer from '../screens/VideoPlayer/index.tsx';
import UpcomingVideo from '../screens/UpcomingVideo/index.tsx';
import MovieSearch from '../screens/MovieSearch/index.tsx';
import LoginScreen from '../screens/LoginScreen/index.tsx';
import SignUpScreen from '../screens/SignUpScreen/index.tsx';
import BottomTab from './BottomTab.tsx';
import ForgotPassword from '../screens/ForgotPasswordScreen/index.tsx';
import TutorialScreen from '../screens/TutorialScreen/index.tsx';
import ProfileScreen from '../screens/SelectProfile/index.tsx';
import DownloadScreen from '../screens/DownloadScreen/index.tsx';


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
