import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './style';
import { Icons } from '../../assets';

const ForgotPassword: React.FC = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    setIsButtonEnabled(!email); // Button is enabled only when email is valid
  }, [email]);

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
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.touch}>
          <Image source={Icons.arrowLeft} style={styles.imgArr} />
        </TouchableOpacity>
      <Text style={styles.title}>Reset Password</Text>
      <View></View>
      </View>
      
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#aaa"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity
        style={[styles.resetButton, { opacity: isButtonEnabled ? 0.5 : 1 }]}
        onPress={handlePasswordReset}
        disabled={isButtonEnabled}
      >
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
