import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ComponentNames} from '../api/common';
import Card from '../components/Card';

const Dashboard = ({navigation}) => {
  const renderItem = ({item}) => {
    return <Card name={item.name} navigation={navigation} id={item.id} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Object.values(ComponentNames())}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Dashboard;
