/**
 * Created by iampamungkas on 7/28/17.
 */

import React, { Component } from 'react'
import { View, Text, TextInput, Button, StatusBar} from 'react-native'
export default class DetailScreenForm extends Component {
    render(){
        const { detail, navigation } =this.props;
        return(
            <View style = {container1} >
                <StatusBar backgroundColor="#2ecc71"/>
                <Text style={enjoyYourTour} >
                    Enjoy{"\n"}your tour!
                </Text>
                <Text style={cityDestination}>
                    City Destination
                </Text>
                <TextInput style={margin} underlineColorAndroid="#2ecc71"/>
                <Text style={cityDestination}>
                    Budget
                </Text>
                <TextInput style={margin1} underlineColorAndroid="#2ecc71"/>
                <Text style={cityDestination}>
                    Time Period
                </Text>
                <TextInput style={margin2} underlineColorAndroid="#2ecc71"/>
                <View style={container2}>
                    <Button
                        color="#2ecc71" title="GENERATE" onPress={() => navigation.navigate('ListNavigation')}
                    />
                </View>
            </View>
        )
    }
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
const container2 = {
    padding: 36
}
const margin2 = {
    marginLeft: 36,
    marginRight: 36,
    marginBottom: 20
};
const margin1 = {
    marginLeft: 36,
    marginRight: 36,
};
const margin = {
    marginLeft: 36,
    marginRight: 36,
};
const cityDestination = {
    marginTop: 40,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 20,
    letterSpacing: 0.08,
    color: "#b7bdbe"
};
const enjoyYourTour = {
    marginTop: 50,
    marginLeft: 36,
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "left",
    color: "#2ecc71"
};