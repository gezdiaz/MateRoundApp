import React from 'react';
import { MateDrinker } from '../types/MateDrinker';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 160,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 5,
  },
  name: {
    fontSize: 50,
  },
  fillerTag: {
    fontSize: 60,
  },
  mate: {
    fontSize: 40,
    width: 50,
  },
  noMate: {
    width: 50,
  },
});

const MateDrinkerCard = ({
  onPress,
  name,
  isFiller,
  isFilling,
  hasMate = false,
}: MateDrinker & {
  onPress: () => void;
  isFiller: boolean;
  isFilling: boolean;
  hasMate: boolean;
}): React.JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        {isFiller && <Text style={styles.fillerTag}>⭐</Text>}
        {hasMate ? (
          <Text style={styles.mate}>{isFiller && isFilling && '💧'}🧉</Text>
        ) : (
          <View style={styles.noMate} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MateDrinkerCard;
