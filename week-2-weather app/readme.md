# Week-2: Weather App

A professional and responsive real-time weather app built with  JavaScript. This project integrates the OpenWeatherMap API to deliver live weather updates with a focus on clean UI and seamless user experience.



# Screenshots

| Main Dashboard | Error Handling State |

| ![Main UI](weather-app-img/images/main-ui.png)) | ![Error State](weather-app-img/images/error.png) |



#Features Implemented

Real-time City Search:  Users can enter any city name to fetch instant weather data.

Comprehensive Weather Metrics: Displays essential data including City Name, Temperature (°C), Humidity, and Wind Speed.

Dynamic Visuals:  Weather icons update automatically based on real-time atmospheric conditions (e.g., Clouds, Clear, Rain).

Smart Error Handling: Provides a user-friendly "Invalid city name" message if the city is not found or a network error occurs.

Data Persistence:  Automatically saves the last searched city to `localStorage` and reloads it upon opening the app to ensure a consistent user session.

# Concepts Practised

Asynchronous JavaScript:** Using Fetch API with `async/await` and Promises for network calls.
DOM Manipulation:** Real-time updates to HTML elements and event handling.
API Integration:** Connecting to the OpenWeatherMap provider.
Web Storage:** Managing persistent data using `localStorage`.
Responsive UI:** Designing a mobile-friendly layout with CSS.

# Project Structure

week-2-weather-app/
├── index.html         
├── style.css          
├── script.js         
├── README.md           
└── weather-app-img/    

# How to Run
1. Clone/Download: Download the project folder to your local machine.
2. Navigate: Open the `week-2-weather-app` directory.
3. Launch: Double-click the `index.html` file to open it in your default web browser.
4. Search: Type a city name in the search bar and click the search icon to see the results.

# API Reference
Data Provider: [OpenWeatherMap API](https://openweathermap.org/)
