import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Auth0 from 'react-native-auth0';
const auth0 = new Auth0({ domain: 'brellin.auth0.com', clientId: 'ESHCP7e8Vxb5slqmXWuq2e2WSLsPcahZ' });
// import { auth0, AUTH0_DOMAIN } from './auth0.js';
export default class App extends React.Component {
  loginWindow() {
    
    auth0
      .webAuth
      .authorize({ scope: 'openid profile email', audience: 'https://brellin.auth0.com/userinfo' })
      .then(credentials =>
        console.log(credentials)
        // Successfully authenticated
        // Store the accessToken
      )
      .catch(error => console.log(error));

  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome To Sports Bet App</Text>
        <Button
          title="login"
          onPress={() => this.loginWindow()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

