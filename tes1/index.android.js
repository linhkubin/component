/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class tes1 extends Component {

      // constructor(props){ // chay trc render

      //   super(props);
        
      // }


      componentWillMount(){
      // man hinh trc render
      }


      render() {
        return (


         <View>
            <AX name = "linh nguyen"/>
            <AX name/>
            <AX name = 'tung dech'/>
        
         </View>

        );
      }



        componentDidMount(){
        // sau render
        }


};
 

 export default class AX extends Component{
      render(){
          return(
            <View >
                <Text style={styles.textClient}> {this.props.name} </Text>
            </View>
          );

      }

  }

  const styles = StyleSheet.create({
    textClient:{
      fontSize : 30
    }
  });





AppRegistry.registerComponent('tes1', () => tes1);
