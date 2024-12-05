import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import styles from './style'

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const[isButtonEnabled,setIsButtonEnabled] = useState(false)

  useEffect(() => {
    setIsButtonEnabled(!email)
  },[email])

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Success', 'Password reset email sent. Please check your inbox.');
    } catch (error) {
      
      Alert.alert('Error', 'Unable to send password reset email. Please try again later.');
    }
  };

  return (
    <View style={styles.overlay}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity style={[styles.resetButton,  {opacity : isButtonEnabled ? 0.5 : ''}]} onPress={handlePasswordReset} disabled={isButtonEnabled}>
        <Text style={[styles.resetButtonText ,]}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
