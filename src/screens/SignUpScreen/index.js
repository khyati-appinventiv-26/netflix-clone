import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Animated, Keyboard } from 'react-native';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import styles from './style'
import Icon from 'react-native-vector-icons/Ionicons';
import { Icons } from '../../assets';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [keyboardOffset] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
    setIsPasswordValid(password.length >= 6);
    setIsButtonEnabled(emailRegex.test(email) && password.length >= 6);

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [email, password]);

  const handleKeyboardShow = (event) => {
    Animated.timing(keyboardOffset, {
      toValue: -event.endCoordinates.height / 2,
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

  const handleSignUp = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      
      navigation.navigate('login');
    } catch (error) {
      
    }
  };

  return (
    <Animated.View style={[styles.overlay, { transform: [{ translateY: keyboardOffset }] }]}>
      <View style={styles.imgVw}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrView}> 
          <Image source={Icons.arrowLeft} style={styles.arrow}/>
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://media.zenfs.com/en/hypebeast_936/55dd2178cbbd27b2cdba3f8985a08d48',
          }}
          style={styles.img}
          
        />
        <View></View>
        <View />
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={[
            styles.input,
            !isEmailValid && email.length > 0
              ? { borderBottomColor: '#FFA500', borderBottomWidth: 1 }
              : { borderBottomWidth: 1, borderBottomColor: '#333' },
          ]}
          value={email}
          onChangeText={setEmail}
        />
        {!isEmailValid && email.length > 0 ? (
          <Text style={styles.errorText}>Invalid email format</Text>
        ) : (
          <Text style={styles.errorText}></Text>
        )}
        <View style={{width : '100%'}}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          style={[
            styles.input,
            !isPasswordValid && password.length > 0
              ? { borderBottomColor: '#FFA500', borderBottomWidth: 1 }
              : { borderBottomWidth: 1, borderBottomColor: '#333' },
            
          ]}
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.iconStyle}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={22} color="white" />
        </TouchableOpacity>
        </View>
        {!isPasswordValid && password.length > 0 ? (
          <Text style={styles.errorText}>Password must be at least 6 characters</Text>
        ) : (
          <Text style={styles.errorText}></Text>
        )}
        <TouchableOpacity
          style={[styles.loginButton, !isButtonEnabled && { opacity: 0.5 }]}
          onPress={handleSignUp}
          disabled={!isButtonEnabled}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default SignUpScreen;

