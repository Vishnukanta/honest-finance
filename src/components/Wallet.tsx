import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const Wallet = () => {
  return (
    <View style={styles.div}>
      <Text>10 000 привет</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  div: {
    height: 85,
    width: 188,
    borderRadius: 16,
    backgroundColor: '#662FC1',
  },
  text: {
    fontFamily: 'Livvic-Bold.ttf',
    fontSize: 25,
  },
})

export default Wallet
