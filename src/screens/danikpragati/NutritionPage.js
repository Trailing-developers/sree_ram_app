import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export const NutritionPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/736x/31/c2/04/31c20422fdc9db2e882b8c24fd7cecca.jpg' }} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => navigation.navigate('SattvicDiet')}>
          <Image 
            source={{ uri: 'https://static.toiimg.com/thumb/imgsize-23456,msid-105968419,width-600,resizemode-4/105968419.jpg' }} 
            style={styles.buttonImage}
          />
          <View style={styles.dialogBox}>
            <Text style={styles.dialogText}>Sattvic Diet</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={() => navigation.navigate('VratAahar')}>
          <Image 
            source={{ uri: 'https://www.healthifyme.com/blog/wp-content/uploads/2023/06/shutterstock_1684628152-1.jpg' }} 
            style={styles.buttonImage}
          />
          <View style={styles.dialogBox}>
            <Text style={styles.dialogText}>VratAahar</Text>
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
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 0,
    width: 400,
    height: 50,
    justifyContent: 'center',
    marginTop:-15
  },
  dialogText: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NutritionPage;
