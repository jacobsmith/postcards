import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  constructor() {
    super()
    this.showFirstContactAsync = this.showFirstContactAsync.bind(this);
  }

  async showFirstContactAsync() {
    // Ask for permission to query contacts.
    const permission = await Expo.Permissions.askAsync(Expo.Permissions.CONTACTS);
    if (permission.status !== 'granted') {
      // Permission was denied...
      return;
    }
    const contacts = await Expo.Contacts.getContactsAsync({
      fields: [
        Expo.Contacts.PHONE_NUMBERS,
        Expo.Contacts.EMAILS,
      ],
      pageSize: 10,
      pageOffset: 0,
    });
    if (contacts.total > 0) {
      Alert.alert(
        'Your first contact is...',
        `Name: ${contacts.data[0].name}\n` +
        `Phone numbers: ${JSON.stringify(contacts.data[0].phoneNumbers)}\n` +
        `Emails: ${JSON.stringify(contacts.data[0].emails)}` +
        `total contacts: ${contacts.total}`
      );
    }
  }

  render() {
    return (
      <View style={styles.container} onTouchEnd={this.showFirstContactAsync}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu. Or not, it's your phone.</Text>
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
