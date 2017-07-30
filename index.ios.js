import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import configureStore from 'src/store/configureStore'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import DetailNavigation from 'src/componenets/Detail/views/DetailNavigation'
const store = configureStore();
export default class GenwisApp extends Component {
  render() {
    return (
        <Provider store={store}>
            <StatusBar
                backgroundColor="#2eec71"
            />
          <DetailNavigation/>
        </Provider>
    );
  }
}

AppRegistry.registerComponent('GenwisApp', () => GenwisApp);
