import React from "react";
import { View, Text } from "react-native";
import RepositoryList from "./RepositoryList";

export default function Main() {
  return (
    <View>
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}