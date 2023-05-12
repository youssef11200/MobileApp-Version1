import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const ImageSelect = () => {
  // const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({ title: 'Select Photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  const launchCamera = () => {
    ImagePicker.launchCamera({ title: 'Take Photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <Icon name='image-outline' size={100} style={{marginRight:20}}/>
     
      <Icon name='image-outline' size={100} style={{marginLeft:20}} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Select Photo" onPress={handleImagePicker} />
        <Button title="Take Photo" onPress={launchCamera} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   height:250,
    alignItems: 'center',

    backgroundColor: '#f5f5f5',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    margin: 20,
  },
});

export default ImageSelect;
