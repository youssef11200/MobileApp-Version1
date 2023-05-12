import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

const UserSettingProfile = () => {
  const generateProduct = () => {
    // Code for generating a product goes here
    // You can customize this function as per your requirements
    console.log('Generating product...');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Icon name='person-circle-outline'size={150} style={{textAlign:'center'}}/>
      <View style={styles.profileContainer}>
        <Text style={styles.username}>Youssef Nasser</Text>
        <Text style={styles.email}>youssefnasser@example.com</Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingText}>Privacy Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingText}>Notification Preferences</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption} onPress={generateProduct}>
          <Text style={styles.settingText}>Generate Account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productContainer}>
        {/* Display the generated product here */}
        {/* You can customize this view to show the product details */}
        <Text style={styles.productTitle}>Order History</Text>
        <Text style={styles.productDetails}>Order Date: 02/02/2022</Text>
        <Text style={styles.productDetails}>cooperative Name: Almond</Text>
        <Text style={styles.productDetails}>Status: Accepted</Text>
        <Text style={styles.productDetails}>-------------------</Text>
        <Text style={styles.productDetails}>Order Date: 02/03/2022</Text>
        <Text style={styles.productDetails}>cooperative Name: Pistache</Text>
        <Text style={styles.productDetails}>Status: Pending</Text>
        <Text style={styles.productDetails}>-------------------</Text>
        <Text style={styles.productDetails}>Order Date: 02/04/2022</Text>
        <Text style={styles.productDetails}>cooperative Name:Olive</Text>
        <Text style={styles.productDetails}>Status: Rejected</Text>

      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#888',
  },
  settingsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    elevation: 2,
    marginBottom: 20,
  },
  settingOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 18,
    color: '#555',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  productDetails: {
    fontSize: 16,
    color: '#555',
  },
});

export default UserSettingProfile;
