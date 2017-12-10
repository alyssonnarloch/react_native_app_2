import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDRwcymwjxSdfad-85E1uj6-LKh-Zv0hLU',
            authDomain: 'react-native-auth-ce191.firebaseapp.com',
            databaseURL: 'https://react-native-auth-ce191.firebaseio.com',
            projectId: 'react-native-auth-ce191',
            storageBucket: 'react-native-auth-ce191.appspot.com',
            messagingSenderId: '440569175413'
        });   
    }

    render() {
        return ( 
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
