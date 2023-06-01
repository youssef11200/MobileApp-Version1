import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, totalStars, onRate }) => {
  const stars = [];
  
  // Generate individual star components based on rating and total stars
  for (let i = 1; i <= totalStars; i++) {
    const name = i <= rating ? 'star' : 'star-o';
    stars.push(
      <TouchableOpacity
        key={i}
        onPress={() => onRate(i)}
      >
        <Icon name={name} size={30} color="yellow" />
      </TouchableOpacity>
    );
  }
  
  return <View style={styles.container}>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});






const StarReview = () => {
  const [rating, setRating] = useState(4);

  const handleRate = (newRating) => {
    setRating(newRating);
  };

  return (
    <View>
      <StarRating
        rating={rating}
        totalStars={5}
        onRate={handleRate}
      />
    </View>
  );
};

export default StarReview;
