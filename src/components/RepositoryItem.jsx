import {View, StyleSheet} from "react-native";
import RepositoryStats from "./RepositoryStats.jsx";
import theme from "../theme.js";
import RepositoryItemHeader from "./RepositoryItemHeader.jsx";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
          <RepositoryItemHeader {...props} />
          <RepositoryStats {...props} />
        </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingBottom:5,
    paddingTop:5,
  }
})

export default RepositoryItem