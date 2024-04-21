import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MateDrinker} from './src/types/MateDrinket';
import MateDrinkerCard from './src/components/MateDrinkerCard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [mateIndex, setMateIndex] = useState<number>(0);
  const [mateDrinkers, setMateDrinkers] = useState<MateDrinker[]>([
    {
      name: 'Gaston',
      isCebador: true,
      hasMate: true,
    },
    {
      name: 'Henry',
      isCebador: false,
      hasMate: false,
    },
    {
      name: 'Cami',
      isCebador: false,
      hasMate: false,
    },
    {
      name: 'Gonza',
      isCebador: false,
      hasMate: false,
    },
  ]);

  const cycleMate = () => {
    let newMateIndex = mateIndex + 1;
    if (newMateIndex >= mateDrinkers.length) {
      newMateIndex = 0;
    }
    mateDrinkers[mateIndex].hasMate = false;
    mateDrinkers[newMateIndex].hasMate = true;
    setMateIndex(newMateIndex);
    setMateDrinkers([...mateDrinkers]);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 5}}>
        {mateDrinkers.map(md => (
          <MateDrinkerCard key={md.name} {...md} />
        ))}
      </ScrollView>
      <Button onPress={cycleMate} title="Pasar Mate" />
    </SafeAreaView>
  );
}

export default App;
