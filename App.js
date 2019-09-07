import { createStackNavigator} from 'react-navigation-stack'
import  {createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantShowScreen from './src/screens/RestaurantShowScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantShow: RestaurantShowScreen
  },
  {
    initialRoutesName: 'SearchScreen',
    defaultNavigationOptions: {
      title: 'Restraunt Search'
    }
  }
);

export default createAppContainer(navigator);


//5782848333ad024a4c6f68d283fd7b6b -zomato

//Yelp
  // Client ID
  // F_hO7JTjZAs0UX12qpMjGQ

  // API Key
  // 5faKOScroIEeJj7yrJOan_qC3kyJZrp837-9LY5eFZ76qGJuE4IqdT-pdTamKgyRH7m0Zli-Xw5dBSuLzsr6XGavE-suvQhOVxzny9V4MVt8XvO8IgVphi6JladuXXYx