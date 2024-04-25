import React from "react";
import { View, StyleSheet } from "react-native";
import RepositoryList from "./RepositoryList";

export default function Main() {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:40
  }
})