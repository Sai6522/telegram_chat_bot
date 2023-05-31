# Telegram Weather Bot using Node.js

This repository contains a Telegram chat bot that provides weather information using a weather API. The bot is implemented using Node.js and can be easily set up and deployed on a server or cloud platform.

## Prerequisites

To run the Telegram Weather Bot, you need to have the following installed on your system:

- Node.js (version 10 or higher)
- npm (Node package manager)

You will also need to create an account on a weather API provider to obtain an API key.

## Installation

1. Clone this repository to your local machine:

```shell
git clone https://github.com/your-username/telegram-weather-bot.git
```

2. Navigate to the project directory:

```shell
cd telegram-weather-bot
```

3. Install the required dependencies:

```shell
npm install
```

4. Create a `.env` file in the project root directory and add the following environment variables:

```shell
BOT_TOKEN=<Your Telegram Bot Token>
WEATHER_API_KEY=<Your Weather API Key>
```

Replace `<Your Telegram Bot Token>` with the token of your Telegram bot, which you can obtain by creating a bot using the BotFather on Telegram. And `<Your Weather API Key>` should be replaced with the API key you obtained from the weather API provider.

## Usage

To start the Telegram Weather Bot, run the following command in the project root directory:

```shell
node index.js
```

Now, you can search for your bot in the Telegram app and start chatting with it. You can send commands to get the weather information for a specific location.

Here are the available commands:

- `/current <location>`: Retrieves the current weather information for the specified location.
- `/forecast <location>`: Retrieves the weather forecast for the specified location.

For example, to get the current weather in New York City, you can send the following message to the bot:

```
/current New York City
```

The bot will respond with the current weather conditions in New York City.

## Customization

You can customize the behavior and responses of the Telegram Weather Bot by modifying the `index.js` file. The file contains the main logic of the bot and handles incoming messages, commands, and API requests.

Feel free to explore the code and make changes to fit your specific requirements. You can add additional commands, customize responses, or integrate with other APIs.

## Contributing

If you'd like to contribute to this project, you can fork the repository, make your changes, and submit a pull request. Your contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Weather API Provider](https://example.com) (Replace with the actual weather API provider you are using)

Please note that the weather API provider mentioned above is just an example. You should replace it with the actual weather API provider you are using and provide appropriate attribution if required.
