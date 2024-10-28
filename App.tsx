import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useState } from 'react';

export default function DetailScreen(){

  const [activeButton, setActiveButton] = useState(0);
  return(
    <LinearGradient
      colors={['#EAA9A9', '#000000', '#514E4E', 'rgba(0, 0, 0, 0)']}
      locations={[0, 0.9998, 0.9999, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.text}>Home Sweet Home</Text>
      <View style={styles.card}>
        <View style={[styles.row, styles.borderBottom]}>
          <View style={[styles.cell, styles.borderRight]}>
            <Text style={styles.value}>22°C</Text>
            <Text style={styles.label}>Avg House Temp</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.value}>60°F</Text>
            <Text style={styles.label}>Outside Temp</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.cell, styles.borderRight]}>
            <Text style={styles.value}>60 %</Text>
            <Text style={styles.label}>PPP</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.value}>3</Text>
            <Text style={styles.label}>Devices</Text>
          </View>
        </View>
      </View>

      <View style={styles.roomContainer}>
        <Text style={styles.roomTitle}>Room</Text>
        <View style={styles.buttonGrid}>
          <View style={styles.buttonRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FDA43C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.roomButton}
              >
                <Text style={styles.buttonText}>Master Bedroom</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FDA43C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.roomButton}
              >
                <Text style={styles.buttonText}>Bedroom</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FDA43C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.roomButton}
              >
                <Text style={styles.buttonText}>Kids Room</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
              <LinearGradient
                colors={['#FFFFFF', '#FDA43C']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.roomButton}
              >
                <Text style={styles.buttonText}>Drawing Room</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>


      <View style={styles.routinesContainer}>
        <Text style={styles.routinesTitle}>Routines</Text>
        <View style={styles.routinesButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.routineButton, styles.morningButton]}
          >
            <Image
              source={require('./assets/sunrise.png')}
              style={styles.routineIcon}
            />
            <Text style={styles.routineButtonText}>Morning</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.routineButton, styles.outButton]}
          >
            <Image
              source={require('./assets/door.png')}
              style={[styles.routineIcon, styles.lightIcon]}
            />
            <Text style={[styles.routineButtonText, styles.lightText]}>Out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.textBottom}>Device in Use</Text>
            <View style={styles.bottomBar}>
            <LinearGradient
          colors={['#FFFFFF', '#FDA43C']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bottomGradient}
        >
        <View style={styles.bottomContent}>
          <TouchableOpacity
            style={[styles.navButton, activeButton === 0 && styles.activeButton]}
            onPress={() => setActiveButton(0)}
          >
            <Image
              source={require('./assets/fan.png')}
              style={[styles.navIcon, activeButton === 0 && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, activeButton === 1 && styles.activeButton]}
            onPress={() => setActiveButton(1)}
          >
            <Image
              source={require('./assets/lightbulb.png')}
              style={[styles.navIcon, activeButton === 1 && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, activeButton === 2 && styles.activeButton]}
            onPress={() => setActiveButton(2)}
          >
            <Image
              source={require('./assets/airconditioner.png')}
              style={[styles.navIcon, activeButton === 2 && styles.activeIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, activeButton === 3 && styles.activeButton]}
            onPress={() => setActiveButton(3)}
          >
            <Image
              source={require('./assets/group.png')}
              style={[styles.navIcon, activeButton === 3 && styles.activeIcon]}
            />
          </TouchableOpacity>
        </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginTop: 45,
  },
  card: {
    width: 353,
    height: 209,
    top: 12,
    backgroundColor: '#FEB35B',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.23,
    shadowRadius: 51,
    elevation: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#000',
    marginTop: 5,
  },
  borderRight: {
    borderRightWidth: 1,
    borderRightColor: '#EA9939',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#EA9939',
  },
  roomContainer: {
    width: '95%',
    paddingHorizontal: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
  roomTitle: {
    fontSize: 21,
    color: '#FDA43C',
    marginBottom: 15,
    marginLeft: 15,
  },
  buttonGrid: {
    width: '95%',
    alignSelf: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonWrapper: {
    width: '48%',
  },
  roomButton: {
    paddingVertical: 17,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
  },
  routinesContainer: {
    width: '95%',
    paddingHorizontal: 20,
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  routinesTitle: {
    fontSize: 21,
    fontFamily: 'Roboto',
    color: '#F4A460',
    marginBottom: 15,
    fontWeight: '400',
    marginLeft: 15,
  },
  routinesButtonContainer: {
    flexDirection: 'row',
    gap: 15,
    paddingLeft: 15,
  },
  routineButton: {
    width: 132,
    height: 95,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  morningButton: {
    backgroundColor: '#FAA23B',
  },
  outButton: {
    backgroundColor: '#3F3F3F',
  },
  routineIcon: {
    width: 30,
    height: 30,
    marginBottom: 8,
    tintColor: '#000000',
  },
  lightIcon: {
    tintColor: '#F4A460',
  },
  routineButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  lightText: {
    color: '#F4A460',
  },
  textBottom: {
    fontSize: 21,
    fontFamily: 'Roboto',
    color: '#FDA43C',
    marginBottom: 15,
    fontWeight: '400',
    marginLeft: 35,
    alignSelf: 'flex-start',
    marginTop: 30,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right: 20,
    height: 70,
    borderRadius: 67,
    overflow: 'hidden',
  },
  bottomGradient: {
    flex: 1,
    width: '100%',
  },
  bottomContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#C2771E',
  },
  navIcon: {
    width: 30,
    height: 30,
    tintColor: '#000',
  },
  activeIcon: {
    tintColor: '#FFF',
  },
});
