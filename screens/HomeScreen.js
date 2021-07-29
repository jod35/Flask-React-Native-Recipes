import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Recipe from '../components/Recipe'
import AddButton from '../components/CreateButton'

const HomeScreen = ({ navigation }) => {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch('http://10.0.2.2:5000/recipes') //get the notifications
            .then(response => response.json())
            .then((data) => {

                console.log(data)        
                setRecipes(data.reverse())
            })
            .catch(err => console.log(err))
    }, [])


    const renderItem = ({ item }) => (
        <Recipe title={item.title}
            description={item.description}
            onPress={navigation.navigate('RecipeDetail')}
        />
    )



    const goToCreate=()=>{
        navigation.navigate('CreateRecipe')
    }
    return (
        <View style={styles.container}>
           <AddButton onPress={goToCreate}/>
            <View>
                <FlatList
                    data={recipes}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "dodgerblue"
    }
})


export default HomeScreen