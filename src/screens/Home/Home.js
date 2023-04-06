import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Dimensions } from 'react-native';

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const animatedValue = new Animated.Value(0);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
    Animated.timing(animatedValue, {
      toValue: isSidebarVisible ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-screenWidth, 0],
  });

  return (
    <>
      <TouchableOpacity onPress={toggleSidebar} style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>Open Sidebar</Text>
      </TouchableOpacity>
      <Animated.View style={[styles.sidebar, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close Sidebar</Text>
        </TouchableOpacity>
        <Text style={styles.sidebarText}>Sidebar Content Goes Here</Text>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  sidebarButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    alignSelf: 'flex-start',
  },
  sidebarButtonText: {
    color: '#000000',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    backgroundColor: '#000000',
    padding: 20,
    zIndex: 100,
  },
  closeButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#000000',
  },
  sidebarText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Sidebar;
