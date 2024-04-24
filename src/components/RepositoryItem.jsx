import { View } from "react-native"
import StyledText from "./StyleText.jsx"
import RepositoryStats from "./RepositoryStats.jsx"

const RepositoryItem = (props) => {
  return (
    <View key={props.id}>
          <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
          <StyledText>Description: {props.description}</StyledText>
          <StyledText>Language: {props.language}</StyledText>
          <RepositoryStats {...props} />
        </View>
  )
}

export default RepositoryItem