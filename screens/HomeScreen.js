import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import Header from '../components/myHeader';

export default class HomeScreen extends Component{
  

  render(){
    return(
      <View style={styles.container}>
        <Header title="AS"/>
        <TouchableOpacity style={styles.button}
             
              >
                 
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
              
              >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             
              >
              <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
             
             >
             <Text style={styles.buttonText}>View</Text>
           </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#26ABE4",
   

  },

  button:{
    width:340,
    height:100,
  marginTop:20,
  marginLeft:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#0D2036",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
     }
  },
  buttonText:{
    color:'#26ABE4',
    fontWeight:'200',
    fontSize:20
  }
})
