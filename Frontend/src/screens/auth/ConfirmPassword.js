import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const ConfirmPassword = () => {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleConfirmPassword = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/confirm-password', {
        otp,
        newPassword,
        confirmPassword,
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
      <Text>Changing Password</Text>
      <TextInput value={otp} onChangeText={setOtp} />
      <Text>New Password:</Text>
      <TextInput value={newPassword} onChangeText={setNewPassword} />
      <Text>Confirm Password:</Text>
      <TextInput value={confirmPassword} onChangeText={setConfirmPassword} />
      <Button title="Reset Password" onPress={handleConfirmPassword} />
    </View>
  );
};

export default ConfirmPassword;
