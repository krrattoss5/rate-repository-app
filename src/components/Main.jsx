import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList.jsx";
// import AppBar from "./AppBar";
import { Route,Routes } from "react-router-native";
import LoginPage from "../pages/Login.jsx";
import AppBar from './AppBar.jsx'

export default function Main() {
  //flex 1ayuda a renderizar el ultimo elemento
  return (
    <View style={{ flex:1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<LoginPage />} />
      </Routes>
    </View>
  )
}
