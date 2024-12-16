import { StatusBar, StyleSheet, Text, View, Image, Animated } from 'react-native';
import React, { useEffect } from 'react';
import styles from './style';
import { useSelector } from 'react-redux';

interface RootState {
  tutorial: {
    hasSeenTutorial: boolean;
  };
  auth: {
    isLoggedIn: boolean;
  };
}

const SplashScreen: React.FC = ({navigation}: any) => {
    
    
    const { hasSeenTutorial } = useSelector((state: RootState) => state.tutorial);
    const { isLoggedIn } = useSelector((state: RootState) => state.auth);
    
    const logoScale = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(logoScale, {
            toValue: 1,
            duration: 1800,
            useNativeDriver: true,
        }).start(() => {
            if (!hasSeenTutorial) {
                navigation.replace('Tutorial');
            } else if (isLoggedIn) {
                navigation.replace('bottom');
            } else {
                navigation.replace('login');
            }
        });
    }, [hasSeenTutorial, isLoggedIn, navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} hidden />
            <Animated.Image
                source={{ uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48' }}
                style={[
                    styles.logo,
                    {
                        transform: [{ scale: logoScale }],
                    },
                ]}
                resizeMode='contain'
            />
        </View>
    );
}

export default SplashScreen;
