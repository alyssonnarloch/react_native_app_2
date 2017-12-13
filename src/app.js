import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDRwcymwjxSdfad-85E1uj6-LKh-Zv0hLU',
            authDomain: 'react-native-auth-ce191.firebaseapp.com',
            databaseURL: 'https://react-native-auth-ce191.firebaseio.com',
            projectId: 'react-native-auth-ce191',
            storageBucket: 'react-native-auth-ce191.appspot.com',
            messagingSenderId: '440569175413'
        }); 
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button propOnPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <Card>
                        <CardSection>
                            <Spinner size="large" />
                        </CardSection>
                    </Card>
            );
        }
    }

    render() {
        return ( 
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
