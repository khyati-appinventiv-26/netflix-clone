import React, { useEffect, useState } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
    Animated,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { login } from '../../reduxPersist/authSlice';
import styles from './style';



const LoginScreen: React.FC = ({navigation} : any) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [keyboardOffset] = useState(new Animated.Value(0));
    
    const dispatch = useDispatch();

    useEffect(() => {
        setIsButtonEnabled(Boolean(email && password));

        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [email, password]);

    const handleKeyboardShow = (event: any) => {
        Animated.timing(keyboardOffset, {
            toValue: -event.endCoordinates.height / 2.2,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleKeyboardHide = () => {
        Animated.timing(keyboardOffset, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleLogin = async () => {
        try {
            const userCredential = await auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const userEmail = user.email ;  
            
            dispatch(login({ email: userEmail}));
            navigation.replace('profile-screen'); 
        } catch (error: any) {
            let errorMessage = 'Something went wrong.';
            if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email format.';
            } else if (error.code === 'auth/user-not-found') {
                errorMessage = 'User not found. Please check your email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password. Please try again.';
            }
            Alert.alert('Login Error', errorMessage);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.overlay}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Animated.View style={[styles.container, { transform: [{ translateY: keyboardOffset }] }]}>
                <View style={styles.imgVw}>
                    <Image
                        source={{
                            uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48',
                        }}
                        style={styles.img}
                    />
                </View>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <View style={{ width: '100%' }}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#aaa"
                        style={[styles.input]}
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                        style={styles.iconStyle}
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                    >
                        <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={22} color="white" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('forgot')}>
                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.loginButton,
                        !isButtonEnabled && { opacity: 0.5 },
                    ]}
                    onPress={handleLogin}
                    disabled={!isButtonEnabled}
                >
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signupText}>
                    New to Netflix?{' '}
                    <Text
                        style={styles.signupLink}
                        onPress={() => navigation.navigate('signup')}
                    >
                        Sign up now
                    </Text>
                </Text>
            </Animated.View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
