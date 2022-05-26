import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button, Input} from '@rneui/base';
import {firebase} from '../src/firebase/config';

const screenHeight = Dimensions.get('screen').height;

const SignIn = ({navigation}) => {
  //user login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setEmailAddress = txt => {
    setEmail(txt);
  };

  const setUserPassword = txt => {
    setPassword(txt);
  };

  //user Sign in
  const userLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then(firestoreDocument => {
            if (!firestoreDocument.exists) {
              alert('User does not exist anymore.');
              return;
            }
            const user = firestoreDocument.data();
            navigation.navigate('Employee', {
              user: user,
              navigation: navigation,
            });
          })
          .catch(error => {
            alert(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };

  //navigate to register screen
  const navigateToRegister = () => {
    navigation.navigate('Register');
  };

  const SignUpButton = () => {
    return (
      <View style={{alignItems: 'center'}}>
        <View>
          <Button
            title="Sign In"
            onPress={userLogin}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: '#003290',
              width: 310,
              marginTop: 30,
            }}
          />
        </View>
      </View>
    );
  };

  const RegisterText = () => {
    return (
      <View>
        <Text style={{marginTop: 20}}>
          <Text>Dont have a account ? </Text>
          <TouchableOpacity onPress={navigateToRegister}>
            <Text style={{color: '#003290'}}>Login here</Text>
          </TouchableOpacity>
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 90,
      }}>
      {/* <Text>SignUp</Text> */}
      <View style={{width: 300}}>
        <Input
          placeholder={'Email'}
          value={email}
          onChangeText={setEmailAddress}
          autoCapitalize={'none'}
        />
        <Input
          placeholder={'Password'}
          value={password}
          onChangeText={setUserPassword}
          autoCapitalize={'none'}
        />
      </View>
      <SignUpButton />
      <RegisterText />

      {/* <Button onPress={navigateToUser} title={'View Employee details'} /> */}
    </View>
  );
};

export default SignIn;
