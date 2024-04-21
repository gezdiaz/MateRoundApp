import React from 'react';
import {MateDrinker} from '../types/MateDrinket';
import {Text, View} from 'react-native';

const MateDrinkerCard = ({
  name,
  isCebador,
  hasMate = false,
}: MateDrinker): React.JSX.Element => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 80,
        borderColor: 'black',
        borderWidth: 2,
        padding: 10,
        margin: 5,
      }}>
      <Text style={{fontSize: 20}}>{name}</Text>
      {isCebador && <Text style={{fontSize: 20}}>Es el cebador!</Text>}
      {hasMate && <Text style={{fontSize: 40}}>🧉</Text>}
    </View>
  );
};

export default MateDrinkerCard;
