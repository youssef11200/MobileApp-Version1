import React, {useEffect, useRef, useState, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Text,
  SafeAreaView,
  
} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import Geolocation from 'react-native-geolocation-service';

import {GestureHandlerRootView,ScrollView, } from 'react-native-gesture-handler';
import {CooperativesData} from '../CooperativesData.js';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { BottomSheetModal, BottomSheetModalProvider, BottomSheetScrollView } from '@gorhom/bottom-sheet';


MapboxGL.setWellKnownTileServer('Mapbox');
MapboxGL.setAccessToken(
  'sk.eyJ1IjoiZGlhcnJhZGFoIiwiYSI6ImNsYTZvNnc4ZjAzNnEzbm1xdDhnZmc1NGwifQ.SqAT-G2n0LGfs2Zq0J7kJg',
);
MapboxGL.setConnected(true);

const MapBox = ({navigation}) => {
  
  const [permission, setPermission] = useState(true);
  //console.log('permission',permission)
  useEffect(() => {
    const task = async () => {
      const getPermission = await checkPermission();
      //setPermission(task);
    };
  }, []);

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'AGRI4U',
          message: 'AGRI4U access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        alert('You can use the location');
      } else {
        console.log('location permission denied');
        alert('Location permission denied');
      }
    } catch (err) {
      console.warn(' catch', err);
    }
  };
  //----get the coordinates of my current location
  const [currentLng, setCurrentLng] = useState(null);
  const [currentLat, setCurrentLat] = useState(null);
  //****to move to my current location
  const camera = useRef(null);

  useEffect(() => {
    camera.current?.setCamera({
      centerCoordinate: [9.608516496, 34.116317988],
    });
  }, []);
  useEffect(() => {
    if (checkPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const CurrentLongitude = lng => {
            return (lng = position.coords?.longitude);
          };
          const CurrentLatitude = lat => {
            return (lat = position.coords?.latitude);
          };
          setCurrentLng(position.coords?.longitude);
          setCurrentLat(position.coords?.latitude);
          //---- to move to my current location
          CurrentLocation = () => {
            camRef.setCamera({
              centerCoordinate: [
                position.coords?.longitude,
                position.coords?.latitude,
              ],
            });
          };
        },
        error => {
          //console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 5000, maximumAge: 10000},
      );
    }
    return () => {
      setCurrentLng();
      setCurrentLat();
      //CurrentLocation();
    };
  }, []);
  //-----to focus camera on my current location
  const cameraRef = useRef();
  const [followUser, setFollowUser] = useState(Platform.OS === 'android');

  useEffect(() => {
    if (!followUser && cameraRef?.current) {
      cameraRef.current.moveTo(
        [position.coords?.longitude, position.coords?.latitude],
        300,
      );
    }
  }, [followUser]);
  const [shouldShow, setShouldShow] = useState(false);
  const [item, setItem] = useState(null);
  const ItemPress = item => {
    setShouldShow(true);
    setItem(item);
    handlePresentModalPress();
  };
  //console.log('CooperativesData',CooperativesData[0].coordinate[0])
  const cooperativeList = () => {
    return CooperativesData.map((item, index) => (
      <MapboxGL.MarkerView
        key={index}
        id={item.id}
        coordinate={[item.coordinate[0], item.coordinate[1]]}
        children={
          <TouchableOpacity
            onPress={() => {
              ItemPress(item);
              setShouldShow(true);
              handlePresentModalPress;
            }}>
            <Image
              source={require('../assets/agriculture-Icon.png')}
              alt="point Production"
              resizeMode={'contain'}
              style={{height: 100, width: 30}}
            />
          </TouchableOpacity>
        }
        anchor={{x: 0.5, y: 0.5}}></MapboxGL.MarkerView>
    ));
  };

  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '40%', '75%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index=number) => {
    // console.log('handleSheetChanges', index);
  }, []);
  const cooperativeDetails = () => {
    return (
      
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}> 
        <BottomSheetScrollView> 
          <View style={{flex:1}}>
          <ScrollView 
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerFlatListStyle}
          >
          <View
             style={{
              flex: 1,
              flexDirection: "row",
              }}>
              <Image
                source={{uri: item?.image[0]}}
                alt="No picture available"
                style={{
                  height: 150,
                  width: 300,
                  //justifyContent: 'center',
                  borderRadius: 25,
                  margin: 5,
                  padding: 5,
                }}
              />
              <Image
                source={{uri: item?.image[1]}}
                alt="No picture available"
                style={{
                  height: 150,
                  width: 300,
                 // justifyContent: 'center',
                  borderRadius: 25,
                  margin: 5,
                  padding: 5,
                }}
              />
              
            </View>
            </ScrollView>
            </View>
            
            <Text style={styles.Text}>
            <Icon name="cart-sharp" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Product Name:{' '}
              <Text style={styles.innerText}>{item?.productName}</Text>{' '}
            </Text>
            <Text style={styles.Text}>
            <Icon name="leaf" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Product Type:{' '}
              <Text style={styles.innerText}>{item?.productType}</Text>{' '}
            </Text>
            <Text style={styles.Text}>
            <Icon name="server" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Available quantity:{' '}
              <Text style={styles.innerText}>
                {item?.availableQuantity}
              </Text>{' '}
            </Text>
            <Text style={styles.Text}>
            <Icon name="logo-usd" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Price: <Text style={styles.innerText}>{item?.price}</Text>{' '}
            </Text>
            <Text style={styles.Text}>
            <Icon name="call" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Phone number:{' '}
              <Text style={styles.innerText}>{item?.phoneNumber}</Text>{' '}
            </Text>
            <Text style={styles.Text}>
            <Icon name="location" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
              {' '}
              Adress:{' '}
              <Text style={styles.innerText}>{item?.adress}</Text>{' '}
            </Text>
            
            <TouchableOpacity style={styles.button}>
            <Text style={styles.textStyle}>Add Order</Text>
            </TouchableOpacity>
          </BottomSheetScrollView>
        </View>
      </BottomSheetModal>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.page}>
      <View style={styles.container}>
        <BottomSheetModalProvider>
          <View style={styles.container2}>
            <MapboxGL.MapView
              initialCenterCoordinate={{
                latitude: 9.608516496,
                longitude: 34.116317988,
              }}
              style={styles.map}
              styleURL={MapboxGL.StyleURL.Street}
              zoomEnabled={true}
              logoEnabled={false}
              showUserLocation={true}
              showsMyLocationButton={true}
              userTrackingMode={1}
              rotateEnabled={false}
              scrollEnabled={true}
              onDidFinishLoadingStyle={() => {
                if (followUser) {
                  setFollowUser(false);
                }
              }}>
              <MapboxGL.Camera
                ref={camera}
                zoomLevel={6}
                followUserMode="normal"
                animationMode="moveTo"
                animationDuration={1900}
                centerCoordinate={[9.608516496, 34.116317988]}
              />
              <MapboxGL.UserLocation
                animated={true}
                visible={true}
                showsUserHeadingIndicator={true}
                onUpdate={checkPermission}
                /*onUpdate={location => {
              const currentCoords = [Number(currentLat), Number(currentLng)];
            }}*/ //
              />
              {cooperativeList()}
            </MapboxGL.MapView>
            {cooperativeDetails()}
          </View>
        </BottomSheetModalProvider>
      </View>
    </View>
    </SafeAreaView>
  );
};

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
  container2: {
    flex: 1,
    //padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  Text: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  innerText: {
    padding: 5,
    fontSize: 15,
    color: '#000000',
  },
  textStyle: {
    //flex:1,
    color: 'white',
    fontWeight: 'bold',
    fontSize:15,
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center',
    height: 40,
    width: 100,
    
  
  },
  button: {
    flex:1,
    backgroundColor: '#337722',
    borderRadius: 20,
    padding: 10,
    width:220,
    margin:22,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:60,
  },
  contentContainerFlatListStyle: {
    alignItems: "center",
    height: "100%",
  },
});
