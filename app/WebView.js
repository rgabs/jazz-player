import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (this.props.play ?
      <WebView
      source={{
        uri: 'http://www.jazzandrain.com/'
      }}
      style={{
        margin: 20,
        marginBottom: 50,
        height: 20,
        width: 300,
      }}
      injectedJavaScript={'$(".controls_toggle").click();$("#audioControl").click()'}
      /> : null
    );
  }
}
export default MyWeb
