/**
 * Created by iampamungkas on 7/29/17.
 */
import React, { Component } from 'react'
import { FlatList,ListView, Text, TextInput, Button} from 'react-native'
export default class DetailScreenForm extends Component {
    render(){
        const { List } =this.props;
        return(
            <Text>{List.itinerary[0].time_line[0].name}</Text>
        )
    }
}
const Done = {
    fontFamily: "Ubuntu",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#2ecc71"
}