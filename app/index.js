import React, { Component } from 'react';
import MyWeb from './WebView'
import { AppRegistry, StyleSheet, Text, View, Switch, AppState } from 'react-native';
import TimerMixin from 'react-timer-mixin';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const JazzMeContainer = React.createClass({
  mixins: [TimerMixin],
  componentDidUpdate() {
    const dateRef = new Date();
    const hours = dateRef.getHours();
    const minutes = dateRef.getMinutes();
    // console.log('in componentDidUpdate', 'hours', hours, 'minutes', minutes)
    if (AppState.currentState === 'background') {
      this.setInterval(
        () => {
          console.log('in interval')
          if (hours === 20 && minutes === 34) {
            this.setState({
              play: true
            })
            console.log('playing music')
          } else {
            console.log('not playing music')
          }
        },
        1000
      );
    }
  },
  componentWillUnmount() {
    this.clearInterval();
  },
  render() {
    return <JazzMe/>
  }
})

class JazzMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>Play Jazz</Text>
        <Switch onValueChange={(val) => {
        this.setState({
          play: val
        })
      }} value={this.state.play}/>
      <MyWeb play={this.state.play}/>
    </View>
      );
  }
}
export default JazzMeContainer;
