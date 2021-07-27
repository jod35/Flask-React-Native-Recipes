import React,{useState} from 'react'
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'


const Recipe=({title,description,onPress})=>(
    <TouchableOpacity onPress={onPress} style={styles.recipe}>
      <View>
          <Text style={styles.recipeTitle}>{title}</Text>
      </View>
    </TouchableOpacity>  
)


const styles=StyleSheet.create({
    recipe:{
        padding:20,
        backgroundColor:'#fff',
        borderWidth:2,
        borderColor:'lightgray',
        margin:10
    },
    recipeTitle:{
        fontSize:20,
    }
})


export default Recipe