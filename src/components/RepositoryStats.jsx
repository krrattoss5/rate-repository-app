import React from "react";
import { View } from "react-native";
import StyledText from "./StyleText";

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100 / 10)}k`
    : String(value)
}

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>Stars</StyledText>
        <StyledText>{parseThousands(props.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Forks</StyledText>
        <StyledText>{parseThousands(props.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
        <StyledText>{parseThousands(props.reviewCount)}</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>Rating</StyledText>
        <StyledText>{parseThousands(props.ratingAverage)}</StyledText>
      </View>
    </View>
  )
}
export default RepositoryStats;