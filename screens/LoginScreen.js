import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AntDesign name="github" size={25} color="#123" />
      <Text style={{fontFamily: 'Montserrat'}}>Login Screen</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
