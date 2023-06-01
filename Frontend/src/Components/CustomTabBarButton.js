// import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// import Svg, {Path} from 'react-native-svg';

// const CustomTabBarButton = props => {
//   const {route, children, accessibilityState, onPress} = props;

//   if (accessibilityState.selected) {
//     return (
//       <View style={styles.btnWrapper}>
//         <View style={{flexDirection: 'row'}}>
//           <View
//             style={[
//               styles.svgGapFiller,
//               {
//                 borderTopLeftRadius: route === 'home' ? 10 : 0,
//               },
//             ]}
//           />
         
//           <View
//             style={[
//               styles.svgGapFiller,
//               {
//                 borderTopRightRadius: route === 'settings' ? 10 : 0,
//               },
//             ]}
//           />
//         </View>

//         <TouchableOpacity
//           activeOpacity={1}
//           onPress={onPress}
//           style={[styles.activeBtn]}>
//           <Text>{children}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   } else {
//     return (
//       <TouchableOpacity
//         activeOpacity={1}
//         onPress={onPress}
//         style={[
//           styles.inactiveBtn,
//           {
//             borderTopLeftRadius: route === 'home' ? 10 : 0,
//             borderTopRightRadius: route === 'settings' ? 10 : 0,
//           },
//         ]}>
//         <Text>{children}</Text>
//       </TouchableOpacity>
//     );
//   }
// };

// export default CustomTabBarButton;

// const styles = StyleSheet.create({
//   btnWrapper: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   activeBtn: {
//     flex: 1,
//     position: 'absolute',
//     top: -22,
//     width: 50,
//     height: 50,
//     borderRadius: 50 / 2,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 5,
//   },
//   inactiveBtn: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   svgGapFiller: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
// });
