import React from "react";
import { View,Text } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route,Routes } from "react-router-native";

export default function Main() {
  //flex 1ayuda a renderizar el ultimo elemento
  return (
    <View style={{ flex:1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<Text>Sign In</Text>} />
      </Routes>
    </View>
  )
}
