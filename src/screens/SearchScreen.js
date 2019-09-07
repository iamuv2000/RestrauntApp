import React, {useState} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
import useRestaurants from '../hooks/useRestaurants'
import ResultsList from '../components/ResultsList'


const SearchScreen = () =>{

    const [term,setTerm] = useState('')
    const [searchAPI,restaurants, errorMessage]= useRestaurants()
    
    const filterRestaurantsByPrice=(price)=>{
        //price==='$' || '$$' || '$$$'
        return restaurants.filter((restaurant)=>{
            return restaurant.price===price
        })
    }

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=>searchAPI(term)}
            />
            {errorMessage?<Text>{errorMessage}</Text>:null}
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultsList title="Cost Effective" restaurants={filterRestaurantsByPrice('$')}/>
                <ResultsList title="Bit Pricier" restaurants={filterRestaurantsByPrice('$$')}/>
                <ResultsList title="Big Spender" restaurants={filterRestaurantsByPrice('$$$')}/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        flex:1
    }
})

export default SearchScreen