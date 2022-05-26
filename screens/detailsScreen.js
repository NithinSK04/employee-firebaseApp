import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Input} from '@rneui/base';
import {ComponentNames} from '../api/common';

//shows back button
const BackButton = ({navigation}) => {
  return (
    <View>
      <Button
        onPress={() => navigation.goBack()}
        buttonStyle={styles.button}
        title={'<'}
        titleStyle={{
          color: '#000',
        }}
      />
    </View>
  );
};

//shows item header
const Header = ({currentDetails}) => {
  return (
    <View style={{marginTop: 45, paddingHorizontal: 10}}>
      <Text style={{fontWeight: '600', fontSize: 20}}>
        {currentDetails.name}
      </Text>
    </View>
  );
};

//shows description section

const Description = ({currentDetails}) => {
  return (
    <View style={[styles.descCard, styles.shadowProp]}>
      <Text style={{fontWeight: '600', fontSize: 15}}>
        {currentDetails.heading}
      </Text>
      <Text style={{fontWeight: '300', fontSize: 15}}>
        {currentDetails.desc}
      </Text>
    </View>
  );
};

const DetailsScreen = ({navigation, id, route}) => {
  const itemId = route.params?.id;
  const [currentDetails, seCurrentDetails] = useState('');

  useEffect(() => {
    let Alldetails = ComponentNames();
    seCurrentDetails(Alldetails[itemId]);
  }, []);

  return (
    <>
      <View style={styles.header}>
        <BackButton navigation={navigation} />
        <Header currentDetails={currentDetails} />
      </View>
      <View style={styles.body}>
        <Description currentDetails={currentDetails} />
      </View>
    </>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 50,
    marginTop: 30,
    marginLeft: 20,
    height: 50,
    borderRadius: 40,
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  descCard: {
    backgroundColor: '#fff',
    width: 300,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
