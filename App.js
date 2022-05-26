import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import userDetails from './screens/userDetails';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Register from './screens/Register';
import {firebase} from './src/firebase/config';
import employee from './screens/employee';
import DetailsScreen from './screens/detailsScreen';

const Employee = createStackNavigator();

const App = () => {
  //states
  const [loading, setLoading] = useState(true);
  //to check the user login status

  const [user, setUser] = useState(() => {
    const user = firebase.auth().currentUser;

    return user;
  });

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
      console.log(user);
    });

    //   if (user) {
    //     usersRef
    //       .doc(user.uid)
    //       .get()
    //       .then(document => {
    //         const userData = document.data();
    //         console.log(userData);
    //         setLoading(false);
    //         setUser(userData);
    //       })
    //       .catch(error => {
    //         console.log(error);
    //         setLoading(false);
    //       });
    //   } else {
    //     setLoading(false);
    //   }
    // });
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Employee.Navigator initialRouteName="Home">
          {user ? (
            <Employee.Screen name="Employee" component={employee} />
          ) : (
            <>
              <Employee.Screen name="Register" component={Register} />
              <Employee.Screen name="Home" component={SignIn} />
              <Employee.Screen name="User" component={userDetails} />
            </>
          )}
        </Employee.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
