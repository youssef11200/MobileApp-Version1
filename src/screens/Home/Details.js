import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import Production from './Production';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
          <Production/>
      </View>
            <Pressable
              style={{ borderRadius: 20,
                padding: 10,
                elevation: 2,
               backgroundColor: '#2196F3',
               width:50,marginTop:30}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>X</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Details</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    
  },
 
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:180
   
  },
  buttonOpen: {
    backgroundColor: '#337722',
  
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width:50,
    
   
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;