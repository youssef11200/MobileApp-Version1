import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswords = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>Enter your email to reset your password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#b2b2b2"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    height: 50,
  },
  button: {
    backgroundColor: '#ff5e3a',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
  },
});

export default ForgotPasswords;
