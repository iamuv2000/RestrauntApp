import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        "Authorization": "Bearer 5faKOScroIEeJj7yrJOan_qC3kyJZrp837-9LY5eFZ76qGJuE4IqdT-pdTamKgyRH7m0Zli-Xw5dBSuLzsr6XGavE-suvQhOVxzny9V4MVt8XvO8IgVphi6JladuXXYx",
    }
})