import React from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../data/repositories.js'
import RepositoryItem from './RepositoryItem.jsx';

const RepositoryList = () => {
  //alert("minuto 33:04")
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({item: repo}) => (
        <RepositoryItem {...repo} />
    )}
    />
  )
}

export default RepositoryList;