import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MindPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://w0.peakpx.com/wallpaper/284/26/HD-wallpaper-portrait-display-vertical-artwork-digital-art-space-stars-milky-way-planet-blue.jpg' }} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => navigation.navigate('Manifestation')}>
          <Image 
            source={{ uri: 'https://i.cdn.newsbytesapp.com/images/l2520230904181838.jpeg' }} 
            style={styles.buttonImage}
          />
          <View style={styles.dialogBox}>
            <Text style={styles.dialogText}>Manifestation</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => navigation.navigate('Subliminals')}>
          <Image 
            source={{ uri: 'https://source.boomplaymusic.com/group10/M00/05/14/da593483fbcb4089873969ed83527aef_464_464.jpg' }} 
            style={styles.buttonImage}
          />
          <View style={styles.dialogBox}>
            <Text style={styles.dialogText}>Subliminals</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'white',
  },
  buttonContainer: {
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonImage: {
    width: 400,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  dialogBox: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 0,
    width: 400,
    height: 50,
    justifyContent: 'center',
    marginTop:-20
  },
  dialogText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MindPage;
