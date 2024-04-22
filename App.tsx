import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  useColorScheme,
  Text,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MateDrinker } from './src/types/MateDrinker';
import MateDrinkerCard from './src/components/MateDrinkerCard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    backgroundStyle: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      height: '100%',
    },
    buttonContainer: {
      flex: 0,
      margin: 30,
      fontSize: 50,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#0081f1',
      padding: 10,
    },
  });

  const [mateIndex, setMateIndex] = useState<number>(0);
  const [fillerIndex, setFillerIndex] = useState<number>(0);
  const [isFilling, setIsFilling] = useState<boolean>(false);
  const [nextDrinkerIndex, setNextDrinkerIndex] = useState<number>(0);
  const [mateDrinkers, setMateDrinkers] = useState<MateDrinker[]>([
    {
      name: 'Gaston',
    },
    {
      name: 'Henry',
    },
    {
      name: 'Cami',
    },
  ]);

  const cycleMate = () => {
    setMateIndex(nextDrinkerIndex);
    setIsFilling(false);
  };

  const onPressMateDrinker = (mateDrinkerIndex: number) => {
    setFillerIndex(mateDrinkerIndex);
  };

  const returnToFiller = () => {
    let newMateIndex = mateIndex + 1;
    if (newMateIndex >= mateDrinkers.length) {
      newMateIndex = 0;
    }
    setNextDrinkerIndex(newMateIndex);
    setMateIndex(fillerIndex);
    setIsFilling(true);
  };

  const onButtonPress = () => {
    if (isFilling) {
      return cycleMate();
    }
    return returnToFiller();
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={styles.backgroundStyle.backgroundColor}
      />
      <View style={{ flexGrow: 1, flexBasis: 0 }}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{ padding: 5 }}>
          {mateDrinkers.map((md, index) => (
            <MateDrinkerCard
              key={md.name}
              name={md.name}
              isFiller={index === fillerIndex}
              isFilling={isFilling}
              hasMate={index === mateIndex}
              onPress={() => onPressMateDrinker(index)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={onButtonPress}
          activeOpacity={0.8}>
          <Text style={{ color: 'white', fontSize: 35 }}>
            {isFilling ? 'Pasar Mate' : 'Devolver mate al Cebador'}
          </Text>
        </TouchableOpacity>
        {/* <Button onPress={returnToFiller} title="Devolver mate al Cebador" /> */}
      </View>
    </SafeAreaView>
  );
}

export default App;
