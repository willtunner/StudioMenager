import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Titulo, HeaderTop, Background, ViewRelatorio, BaseEnsaios } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Title, Divider, Caption } from 'react-native-paper';

export default function Relatorios() {


  return (
    <>
      <LinearGradient colors={['#E46765', '#8C356A', '#253066', '#151E3F', '#151E3F']} style={{ flex: 1, alignItems: 'center' }}>
        <Titulo>Relatório de ensaio</Titulo>
        <Background>
          <HeaderTop>
            <Avatar.Image source={{ uri: 'https://f4.bcbits.com/img/a0617474145_10.jpg' }} size={130} />

            <ViewRelatorio>
              <View style={styles.ViewInfo}>
                <View style={{ alignItems: 'center' }}>
                  <Title style={styles.titleInfo}>Anarta</Title>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Caption>Total Ensaios: </Caption>
                    <Caption>Em 30 dias: </Caption>
                    <Caption>Em 15 dias: </Caption>
                    <Caption>Em 07 dias: </Caption>
                  </View>
                  <View style={{ flexDirection: 'column' }}>
                    <Caption>15 </Caption>
                    <Caption>08</Caption>
                    <Caption>04</Caption>
                    <Caption>03</Caption>
                  </View>
                </View>
              </View>
            </ViewRelatorio>

          </HeaderTop>


          <BaseEnsaios>
            {/*01*/}
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

            {/*02*/}
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

            {/*03*/}
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

            {/*04*/}
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

            {/*05*/}
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
          </BaseEnsaios>



          <Divider />
        </Background>
      </LinearGradient>
    </>
  );
}



const styles = StyleSheet.create({
  ViewInfo: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#0083B4'
  },
  titleInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  ensaios: {
    backgroundColor: '#c4c4c4',
    height: 85,
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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