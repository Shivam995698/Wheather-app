Got it 👍
I’ll generate a **README.md** file for your weather app. This will include project description, features, tech stack, setup instructions, and usage details.

Here’s a clean template you can use 👇

---

# 🌦️ Weather App

A simple and interactive Weather App that allows users to check real-time weather conditions of any city across the world. The app fetches live data such as temperature, humidity, wind speed, and weather description using the **Weather API**.

---

## 🚀 Features

* 🌍 Search weather by city name
* 🌡️ Displays temperature, humidity, and wind speed
* ☁️ Shows current weather conditions (Clear, Rain, Cloudy, etc.)
* 📍 Option to fetch weather based on current location (if geolocation is enabled)
* 🔄 Responsive and user-friendly UI

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript (Vanilla / React if you used it)
* **API:** [WeatherAPI](https://www.weatherapi.com/) / OpenWeatherMap
* **Others:** Bootstrap / Tailwind (if used for styling)

---

## ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shivam995698/Wheather-app.git
   cd weather-app
   ```

2. **Get API Key**

   * Sign up at [WeatherAPI](https://www.weatherapi.com/) (or OpenWeatherMap).
   * Copy your API key.

3. **Configure API Key**

   * Open `script.js` (or `.env` if using React/Node).
   * Replace "http://api.weatherapi.com/v1/current.json?key=47844e755d6541ebb12151757252408&q=Mumbai&aqi=no" with your actual API key.

   ```javascript
   const API_KEY = "http://api.weatherapi.com/v1/current.json?key=47844e755d6541ebb12151757252408&q=Mumbai&aqi=no";
   ```

4. **Run the App**

   * If it’s a simple HTML/JS app → just open `index.html` in your browser.
   * If it’s React →

     ```bash
     npm install
     npm start
     ```

---


## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

--

## Author 
<h1>Shivam verma</h1>