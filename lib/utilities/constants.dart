import 'package:flutter/material.dart';

const kTempTextStyle = TextStyle(
  fontFamily: 'Spartan MB',
  fontSize: 100.0,
);

const kMessageTextStyle = TextStyle(
  fontFamily: 'Spartan MB',
  fontSize: 60.0,
);

const kButtonTextStyle = TextStyle(
  fontSize: 30.0,
  fontFamily: 'Spartan MB',
);

const kConditionTextStyle = TextStyle(
  fontSize: 100.0,
);

const kApiKey = "bb591927ee48eb5899784aebfdc54f82";

const kInputDecoration = InputDecoration(
    fillColor: Colors.white,
    filled: true,
    hintText: "Enter city name",
    hintStyle: TextStyle(color: Colors.grey),
    border: OutlineInputBorder(
        borderSide: BorderSide.none,
        borderRadius: BorderRadius.all(Radius.circular((10)))),
    icon: Icon(
      Icons.location_city,
      color: Colors.white,
    ));

const kOpenWeatherMapURL = "https://api.openweathermap.org/data/2.5/weather";
