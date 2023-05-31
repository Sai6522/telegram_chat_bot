const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
res.send('Hello World!');
});

const port=3000;
app.listen(port,()=>{
  console.log('server running at  http://localhost:${port}');
});

// Telegram Bot API Token
const TOKEN = '5632764792:AAEkbLgjPSIsoZunLvVmsMu6TR04KzQQJuk';
// OpenWeatherMap API Key
const API_KEY = '575ddf96cb6097ffdd852a974af91e6a';

// Create a Telegram Bot instance
const bot = new TelegramBot(TOKEN, { polling: true });

// Handle the '/start' command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello! I'm a weather bot. Send me a location to get the weather information.");
});

// Handle the '/weather' command
bot.onText(/\/weather (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const location = match[1];
  getWeather(location)
    .then((weatherData) => {
      bot.sendMessage(chatId, weatherData);
    })
    .catch((error) => {
      console.error(error);
      bot.sendMessage(chatId, 'Unable to retrieve weather information.');
    });
});

// Retrieve weather information from OpenWeatherMap API
async function getWeather(location) {
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    const data = response.data;
    if (data.cod === 200) {
      const city = data.name;
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      return `Weather in ${city}: ${description}\nTemperature: ${temperature}°C`;
    } else {
      throw new Error('Unable to retrieve weather information.');
    }
  } catch (error) {
    throw error;
  }
}
