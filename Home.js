import { Component } from "react";
import React,{Component} from 'react';
import {view,text} from 'react-native';

export default class Home extends Component
{
    render(){
        return(
            <view>
                  <View style={styles.container}></View>
                <text>CST HOme Screen</text>
                <StatusBar style="auto" />
            </view>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });