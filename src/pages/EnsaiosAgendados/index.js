import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import Picker from '../../Components/Picker';
import { Avatar } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default function EnsaiosAgendados() {
  const sports = [
    {
      label: 'Football',
      value: 'football',
    },
    {
      label: 'Baseball',
      value: 'baseball',
    },
    {
      label: 'Hockey',
      value: 'hockey',
    },
  ];

  return (
    
    <LinearGradient colors={['#E46765', '#8C356A', '#253066', '#151E3F', '#151E3F']} style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold' }}>Ensaios Agendados</Text>
      </View>

      <View style={styles.drawerContent}>
        
        {/*01*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>09</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Quarta </Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>

        </View>

        {/*02*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>13</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Sabado </Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>

        </View>

        {/*03*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>14</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Domingo</Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>

        </View>

        {/*04*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>25</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Segunda </Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>

        </View>

        {/*05*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>09</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Quarta </Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>

        </View>

        {/*06*/}
        <View style={styles.ensaios}>
          <View style={styles.statusCard}></View>

          <View style={styles.dateInfo}>
            <Text style={styles.dateText}>21</Text>
          </View>

          <View style={styles.dateInfo2}>
            <Text style={styles.textInfo2}>Quarta </Text>
            <Text style={styles.textInfo2}>Setembro</Text>
            <Text style={styles.textInfo2}>2020</Text>
          </View>

          <View style={styles.avatarBand}>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={55} />
            <Text>Anarta</Text>
          </View>

          <View style={styles.horas}>
            <Text>20:00</Text>
            <Text>as</Text>
            <Text>22:00</Text>
          </View>
        </View>


      </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: '#FFF',
    width: '90%',
    marginLeft: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    padding: 10
  },
  ensaios: {
    backgroundColor: '#c4c4c4',
    height: 85,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusCard: {
    backgroundColor: '#408220',
    height: '100%',
    width: 35,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  dateInfo: {
    //backgroundColor: '#FD651E'
  },
  dateText: {
    fontSize: 40,
    padding: 5
  },
  dateInfo2: {
    alignItems: 'center',
    width: 80
    //backgroundColor: '#138D86',

  },
  textInfo2: {
    fontSize: 15,
    alignItems: 'center',
  },
  avatarBand: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  horas: {
    flex: 1,
    alignItems: 'center'
  }

});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});