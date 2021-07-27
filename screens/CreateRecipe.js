import React,{useState} from 'react';

import { Text,TextInput ,View,StyleSheet,Button} from 'react-native';


const CreateRecipeScreen=()=>{
  const [description,setDescription]=useState('');
  const [title,setTitle]=useState('');

 

  const handleSubmit=()=>{
    const newRecipe={
      title:title,
      description:description
    }

    const requestOptions={
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(newRecipe)
    }

    fetch('http://10.0.2.2:5000/recipes',requestOptions)
    .then(response=>response.json())
    .then(data=>{
      alert(data.message)

      setTitle('')
      setDescription('')
    })
    .then(error=>console.log(error))
  }

  return(
    <View style={styles.container}>
      <Text style={styles.labelText}>Title</Text>
      <TextInput value={title} onChangeText={(title)=>{setTitle(title)}}/>
      <Text style={styles.labelText}>Description</Text>
      <TextInput value={description} onChangeText={(description)=>{setDescription(description)}}/>
      <Button title="Submit" onPress={handleSubmit}/>
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


export default CreateRecipeScreen