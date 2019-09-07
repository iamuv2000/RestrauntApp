import React from 'react'
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'
import ResultsDetails from '../components/ResultsDetails'
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, restaurants,navigation}) =>{
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={restaurants}
                keyExtractor={restaurant=>restaurant.id}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity
                            onPress={()=>navigation.navigate("RestaurantShow",{id:item.id})}
                        >
                            <ResultsDetails 
                                restaurant={item}
                            />
                        </TouchableOpacity>
                        )
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

export default withNavigation(ResultsList)