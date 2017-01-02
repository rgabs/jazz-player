import React, { Component } from 'react';
import { WebView } from 'react-native';

export class MyWeb extends Component {
  render() {
    return (
      <WebView source={{
        uri: 'http://www.jazzandrain.com/'
      }} style={{
        marginTop: 20
      }} injectedJavaScript={'console.log("yello")'} />
      );
  }
}
