import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const SignIn = () => {
  const {signed, user, signIn} = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  async function handleSignIn() {
    // const response = await signIn();
    // console.log(response);
    //console.log('Logar');
    await signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignIn;
