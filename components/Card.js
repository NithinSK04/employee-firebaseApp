import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({navigation, name, id}) => {
  const navigateToDetailsScreen = () => {
    // navigates to detailsScreen.js
    navigation.navigate('details', {id: id});
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToDetailsScreen}>
        <View style={[styles.card, styles.shadowProp]}>
          <Text>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: 130,
    marginHorizontal: 5,
    marginVertical: 10,
    elevation: 20,
    shadowColor: '#52006A',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
