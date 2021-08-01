import React,{useState} from 'react';

import { Text,TextInput ,View,StyleSheet,Button,Modal,Pressable} from 'react-native';


const CreateRecipeScreen=()=>{
  const [description,setDescription]=useState('hello');
  const [title,setTitle]=useState('text');  
  const [modalVisible,setModalVisible]=useState(false);
  const [serverResponse,setServerResponse]=useState('');
  const [responseSucceeded,setResponseSucceeded]=useState(false)

 

  const handleSubmit=()=>{
    const newRecipe={
      title,
      description
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
      
      setServerResponse(data.message)


      if(data.message == 'Created'){
          console.log("Created")
          setResponseSucceeded(true)
      }

      setTitle('')
      setDescription('hello')
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
              onPress={() => {setModalVisible(!modalVisible)
                        if(responseSucceeded){
                            alert("proceed to payment")
                        }
              }}
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