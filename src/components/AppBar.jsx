import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container:{
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft:10,
    flexDirection:'row'
  },
  scroll:{
    paddingBottom:10,
  },
  text:{
    color: theme.appBar.textSecondary,
    paddingHorizontal:10
  },
  active:{
    color: theme.appBar.textPrimary,
  }
})

const AppBarTap = ({children, to}) => {
  const { pathname } = useLocation()

  let active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active,
  ]

 return (
  <Link to={to} component={TouchableWithoutFeedback}>
    <StyledText fontWeight='bold' style={textStyles}>
      {children}
    </StyledText>
  </Link>
 )
}

export default function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTap to='/'>Repositories</AppBarTap>
        <AppBarTap to='/signin'>Sig IN</AppBarTap>
      </ScrollView>
    </View>
  )
}
