const axios = require('axios');
const weather_Api = process.env.weather_Api
exports.getWeather = async (req, res) => {
try {       
            const city = req.query.city;
            const apiKey = process.env.weather_Api;
       
    if (!city) {
      return res.status(400).json({
      message: 'Input a city Name'
    });
    }
    const response = await axios.get(
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_Api}`
                
   );
       
  const   {name, sys, main, weather, wind } = response?.data;
       
      const weatherData = {
        city: `${name} ${sys.country}`,
        temperature: main.temp,
        condition: weather[0].description,
        wind_speed: wind.speed,
        humidity: main.humidity
      };
     res.status(200).json({
      message: "Successfully fetched your weather data",
      data: weatherData
    })      
              
        

  }catch(error){
    console.log(error.message)
    res.status(500).json({
    message: 'Internal Server Error'
    })
        
  }
}
