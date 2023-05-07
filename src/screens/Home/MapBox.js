import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1IjoiZGlhcnJhZGFoIiwiYSI6ImNsYTZvNnc4ZjAzNnEzbm1xdDhnZmc1NGwifQ.SqAT-G2n0LGfs2Zq0J7kJg');
Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setConnected(true);


const MapBox = ({navigation}) => {
    return (
        <View style={styles.page}>
          <View style={styles.container}>
            <Mapbox.MapView style={styles.map} />
          </View>
        </View>
      );
    }
    
    export default MapBox;
    
    const styles = StyleSheet.create({
      page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        height: '100%',
        width: '100%',
      },
      map: {
        flex: 1
      }
    });