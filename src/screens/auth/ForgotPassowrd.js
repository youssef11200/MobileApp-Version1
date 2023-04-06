import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/forgot-password', {
        mobileNumber,
      });
      const message = response.data.message;
      alert(message);
    } catch (error) {
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
    }
  };

  return (
    <View>
      <Text>Mobile Number:</Text>
      <TextInput value={mobileNumber} onChangeText={setMobileNumber} />
      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
};

export default ForgotPassword;
