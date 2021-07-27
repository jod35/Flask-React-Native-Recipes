import React,{useState} from 'react';

import { Text,TextInput ,View,StyleSheet,Button} from 'react-native';


const RecipeScreen=()=>{

  return(
    <View style={styles.container}>
      <Text style={styles.labelText}>Title</Text>
      <Text style={styles.labelText}>Description</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  labelText:{
    fontSize:20
  }
})


export default RecipeScreen