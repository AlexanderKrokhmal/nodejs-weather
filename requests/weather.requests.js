const rp = require('request-promise')

module.exports = async function(city = '') {
 if (!city) {
     throw new Error('Не корректное имя города')
 }

    const KEY = 'f6a106e8c227508f4eaaac4adf72e4d2'
    const uri = 'http://api.openweathermap.org/data/2.5/weather?'

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            units: 'imperial'
        },
        json: true

    }


    try {
        const data = await rp(options)
        console.log(data)
        
        const celsius = (data.main.temp - 32) * 5/9

        return {
            weather: `${data.name}: ${celsius.toFixed(0)}`,
            error: null
        }
    } catch (error) {
        // console.log(error);
        return {
            weather: null,
            error: error.message
        }
    }
}