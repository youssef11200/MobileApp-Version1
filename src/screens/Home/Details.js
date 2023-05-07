import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import Production from './Production';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent={false}
        hardwareAccelerated={true}
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
           
          </View>
          <Pressable
              style={{ borderRadius: 20,
                padding: 10,
                elevation: 2,
               backgroundColor: '#2196F3',
               width:300,marginTop:15,marginLeft:"5%"}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Return </Text>
            </Pressable>
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
   

    alignItems: 'center',
    marginTop: 10,
  },
  modalView: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius:10,
    paddingBottom: 15,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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