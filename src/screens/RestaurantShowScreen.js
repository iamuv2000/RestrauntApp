import React, {useState,useEffect} from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import yelp from '../api/yelp'

const RestaurantShowScreen = ({navigation}) => {
    
    const [restaurant,setRestaurant] = useState(null)

    const id  = navigation.getParam('id')

    console.log(restaurant)

    const getRestaurant = async(id) => {
        const response = await yelp.get(`/${id}`)
        setRestaurant(response.data)
    }
    useEffect(()=>{
        getRestaurant(id)
    },[])

    if(!restaurant){
        return null
    }

    return (
        <>
        <Text style={styles.HeadingStyle}>{restaurant.name}</Text>
        <FlatList 
            data={restaurant.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style = {styles.ImageStyle}source={{uri: item}} />
            }}
        />
        </>
    )
}

const styles = StyleSheet.create({
    ImageStyle:{
        height:200,
        width: 300,
        borderRadius:8,
        margin:10,
        alignSelf:"center"
    },
    HeadingStyle:{
        fontSize:18,
        fontWeight:"bold",
        alignSelf:"center",
        marginTop:15
    }
})

export default RestaurantShowScreen