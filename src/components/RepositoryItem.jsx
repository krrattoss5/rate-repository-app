import { View } from "react-native"
import StyledText from "./StyleText.jsx"

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText fontWeight='bold'>Stars</StyledText>
        <StyledText>{props.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Forks</StyledText>
        <StyledText>{props.forksCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Reviews</StyledText>
        <StyledText>{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText fontWeight='bold'>Rating</StyledText>
        <StyledText>{props.ratingAverage}</StyledText>
      </View>
    </View>
  )
}

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