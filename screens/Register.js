import {View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Button, Input} from '@rneui/base';
import {firebase} from '../src/firebase/config';

const screenHeight = Dimensions.get('screen').height;
const Register = ({navigation}) => {
  //handle input changes and value

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [Cpass, setCpass] = useState('');

  //navigate to user details screen
  const navigateToUser = () => {
    // navigation.navigate('User');
    if (pass !== Cpass) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          name,
        };

        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log('succs');
            navigation.navigate('Home');
          })
          .catch(error => {
            alert(error);
            console.log(error);
          });
      })
      .catch(error => {
        alert(error);
      });
  };

  const SignUpButton = () => {
    return (
      <View>
        <Button
          title="Sign Up"
          onPress={navigateToUser}
          buttonStyle={{
            borderRadius: 10,
            backgroundColor: '#003290',
            width: 310,
            marginTop: 30,
          }}
        />
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
      <View style={{width: 300}}>
        <Input
          placeholder={'Name'}
          onChangeText={setName}
          value={name}
          autoCapitalize={'none'}
        />
        <Input
          placeholder={'Email'}
          onChangeText={setEmail}
          value={email}
          autoCapitalize={'none'}
        />
        <Input
          placeholder={'Password'}
          onChangeText={setPass}
          value={pass}
          autoCapitalize={'none'}
        />
        <Input
          placeholder={'Confirm Password'}
          onChangeText={setCpass}
          value={Cpass}
          autoCapitalize={'none'}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <SignUpButton />
      </View>

      {/* <Button onPress={navigateToUser} title={'View Employee details'} /> */}
    </View>
  );
};

export default Register;
