import {useEffect,useState} from 'react'
import yelp from '../api/yelp'

export default () => { 
    const [restaurants, setRestraunts] = useState([])
    const [errorMessage,setErrorMessage]=useState('')

        const searchAPI = async(searchTerm) => {
            try{
                    const response = await yelp.get('/search',{
                    params:{
                        limit:50,
                        term:searchTerm,
                        location:"New York"	 
                    }
                })
                console.log(response.data)
                setRestraunts(response.data.businesses)
            }catch(e){
                setErrorMessage('Something went wrong. Try again later.')
            }
            
        }

        // searchAPI('pasta')
        useEffect(()=>{
            searchAPI('pasta')
        },[])
        return  [searchAPI,restaurants,errorMessage]
}