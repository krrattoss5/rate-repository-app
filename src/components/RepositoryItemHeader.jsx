import React from "react";
import StyledText from "./StyleText.jsx";
import { Image, View, StyleSheet, Platform } from "react-native";
import theme from '../theme.js'

const styles = StyleSheet.create({
  container:{
    padding:20,
    paddingBottom:5,
    paddingTop:5
  },
  language:{
    padding:4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purle'
    }),
    alignSelf:'flex-start',
    fontWeight: theme.fontWeights.bold,
    overflow: 'hidden',
    borderRadius:4,
    marginTop:4,
    marginBottom:4
  },
  image:{
    height:48,
    width:48,
    borderRadius:4
  }
})

const RepositoryItemHeader = (props) => (
  <View style={{flexDirection: 'row', paddingBottom: 2}}>
    <View>
      <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
    </View>
    <View style={{flex:1, paddingLeft:10}}>
      <StyledText fontSize='subheading' fontWeight='bold'>FullName: {props.fullName}</StyledText>
      <StyledText>Description: {props.description}</StyledText>
      <StyledText style={styles.language}>Language: {props.language}</StyledText>
    </View>
  </View>
)

export default RepositoryItemHeader;