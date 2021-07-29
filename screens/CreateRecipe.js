import React,{useState} from 'react';

import { Text,TextInput ,View,StyleSheet,Button,Modal,Pressable} from 'react-native';


const CreateRecipeScreen=()=>{
  const [description,setDescription]=useState('');
  const [title,setTitle]=useState('');  
  const [modalVisible,setModalVisible]=useState(false);
  const [serverResponse,setServerResponse]=useState('');

 

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
      setModalVisible(true)
      console.log(data);
      setServerResponse(data.message) 

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

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{serverResponse}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
              title="Hide Modal" 
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    flex:1
  },
  labelText:{
    fontSize:20
  },
  centeredView:{
    width:200,
    minHeight:300,
    alignSelf:'center',
    backgroundColor:'white',
    position:'absolute',
    top:200,
    padding:20,
  },
  modalText:{
    fontSize:20,  
  }
})


export default CreateRecipeScreen