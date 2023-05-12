import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Details from './Details'

const EditCoop = () => {

    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.title}> exemple Cooperative </Text>
                <Text>Aviable Quantity</Text>
                <Text>Member</Text>
            </View>
                  <Details />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        width: 230,
        height: 300,
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    rating: {
        fontSize: 16,
        marginLeft: 5,
    },
});

export default EditCoop;
