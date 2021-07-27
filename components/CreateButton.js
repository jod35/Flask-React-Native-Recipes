import React from 'react'
import { Text,View,TouchableOpacity,StyleSheet } from 'react-native'



const AddButton=({onPress})=>{
    return (
        <TouchableOpacity>
            <Text style={styles.addButton} onPress={onPress}>Add A Recipe</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    addButton: {
        padding:15,
        backgroundColor:'dodgerblue',
        color:'#fff',
        borderRadius:10,
        width:150,
        fontSize:20,
    }
})


export default AddButton