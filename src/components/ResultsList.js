import React from 'react'
import {View,Text,StyleSheet,FlatList} from 'react-native'
import ResultsDetails from '../components/ResultsDetails'

const ResultsList = ({title, restaurants}) =>{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={restaurants}
                keyExtractor={restaurant=>restaurant.id}
                renderItem={({item})=>{
                    return <ResultsDetails restaurant={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    },
    containerStyle:{
        marginBottom:10
    }
})

export default ResultsList