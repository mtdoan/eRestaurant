import axios from 'axios'

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'http://192.168.0.65:1000/mainDishes',
        'headers': {
            'content-type':'application/octet-stream',
            'x-rapidapi-host':'example.com',
            'x-rapidapi-key': process.env.RAPIDAPI_KEY
        },
        'params': {
            'search':'parameter',
        },
    })
}