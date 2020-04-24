import 'dart:convert';
import '../utilities/constants.dart';
import 'package:flutter/material.dart';
import "../services/location.dart";
import 'package:http/http.dart' as http;

class NetworkHelper {
  NetworkHelper(this.url);

  String url;

  Future<dynamic> getData() async {
    try {
      http.Response response = await http.get(url);
      if (response.statusCode == 200) return jsonDecode(response.body);
    } catch (e) {
      print(e);
    }
  }
}
