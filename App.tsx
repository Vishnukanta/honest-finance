import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import Wallet from './src/components/Wallet'
import createIncome from './data/foo'

const App = () => {
  return (
    <View style={styles.container}>
      <Wallet />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
