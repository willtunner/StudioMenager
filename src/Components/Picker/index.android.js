import React from 'react';
import { RNPickerSelect } from 'react-native-picker-select';
import { PickerView } from './styles';

export default function Picker({onChange}) {
  return (
      <PickerView>
        <RNPickerSelect 
          style={{
            inputIOS:{
              height: 50,
              padding: 5,
              backgroundColor: '#FFF',
              fontSize: 16
            }
          }}
          placeholder={{
            label: 'Todas as bandas',
            color: '#222',
            value: null,
          }}
          onValueChange={(tipo) => {onChange(tipo)}}
          items={[
            {label: 'Anarta', value: 'anarta', color: '#222'},
            {label: 'Metallica Cover', value: 'metallica cover', color: '#222'},
          ]}
        />
      </PickerView>
  );
}