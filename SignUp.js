import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import * as firebase from "firebase";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: ""
    };
  }

  OnSignUp = () => {
    if (this.state.password != this.state.passwordConfirm) {
      Alert.alert("Password do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {},
        error => {
          Alert.alert(error.message);
        }
      );
  };

  OnBackToLogin = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
          console.log("dismissed keyboard");
        }}
      >
        <View style={styles.SignUp}>
          <Text style = {{ fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
          <View style={{ paddingTop: 20 }} />

          <TextInput
            value={this.state.email}
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ email: text });
            }}
          />
          <TextInput
            value={this.state.password}
            placeholder="password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ password: text });
            }}
          />
          <TextInput
            value={this.state.passwordConfirm}
            placeholder="Confirm your password"
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={text => {
              this.setState({ passwordConfirm: text });
            }}
          />
          <View style={{ paddingTop: 40 }} />

          <Button title="SignUp" color="#CC6600" onPress={this.OnSignUp} />

          <View style={{ paddingTop: 50 }} />

          <Button
            title="have already account?
            Login"
            color="#CC6600"
            onPress={this.OnBackToLogin}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  SignUp: {
    paddingTop: 20,
    flex: 1
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
