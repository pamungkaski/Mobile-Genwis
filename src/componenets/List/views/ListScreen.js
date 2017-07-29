/**
 * Created by iampamungkas on 7/29/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchItineray } from '../../../actions/actions'

import ListScreenForm from "./ListScreenForm";

function mapStateToProps(state) {
    const { selectedDetail, itineraryByDetail } = state;
    const {
        isFetching,
        itinerary: List
    } = itineraryByDetail || {
        isFetching: true,
        itinerary: { }
    };

    return {
        selectedDetail,
        List,
        isFetching
    }
}
class ListScreen extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        const {dispatch, selectedDetail} = this.props;
        dispatch(fetchItineray(selectedDetail))
    }

    render(){
        const { isFetching, List } = this.props;
        return(
            <View style={container1}>
            {
                isFetching ? <Text style={loading}>LOADING!</Text> : <ListScreenForm List={List}/>
            }
            </View>
        )
    }
}
const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
const loading = {
    fontFamily: "Ubuntu",
    fontSize: 39.3,
    fontWeight: "bold",
    letterSpacing: 0.2,
    textAlign: "center",
    color: "#2ecc71"
}
export default connect(mapStateToProps)(ListScreen)