import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'

const ResultsDetails = ({restaurant}) => {

    return(
        <View style={styles.containerStyle}>
            <Image source={{uri: restaurant.image_url}} style={styles.imageStyle}/>
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars, {restaurant.review_count} Reviews </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    containerStyle:{
        marginLeft: 15,
        //marginBottom:15 
    },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
        marginBottom:5
    },
    nameStyle:{
        //fontSize:16,
        fontWeight:"bold"
    }
})

export default ResultsDetails