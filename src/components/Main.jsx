import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

export default function Main() {
  //flex 1ayuda a renderizar el ultimo elemento
  return (
    <View style={{ flex:1 }}>
      <AppBar />
      <RepositoryList />
    </View>
  )
}
