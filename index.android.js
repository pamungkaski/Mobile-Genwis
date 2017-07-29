import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'

import { StatusBar } from 'react-native'
import DetailNavigation from './src/componenets/Detail/views/DetailNavigation'
const store = configureStore();
export default class mogen extends Component {
    render() {
        return (
            <Provider store={store}>
              <View style={container1}>
                  <StatusBar backgroundColor="#2eec71"/>
                  <DetailNavigation/>
              </View>
            </Provider>
        );
    }
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
AppRegistry.registerComponent('mogen', () => mogen);
