/**
 * Created by iampamungkas on 7/28/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput} from 'react-native'
import { connect } from 'react-redux'
import DetailScreenForm from "./DetailScreenForm";
const mapStateToProps = (state) => {
    return {
        detail: state.selectedDetail
    }
};

class DetailScreen extends Component{
    TempDetail = {
        city: '',
        state: '',
        country: ''

    }
    render(){
        const { detail } = this.props;
        return(
            <DetailScreenForm detail={detail}/>
        )
    }
}
export default connect(mapStateToProps)(DetailScreen)
