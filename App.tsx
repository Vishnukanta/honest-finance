import { useCallback } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
import Wallet from './src/components/Wallet'
import Realm from 'realm'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Livvic-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>
        Inter Black
      </Text>
      <Text style={{ fontSize: 30 }}>Platform Default</Text>
      <Wallet />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
