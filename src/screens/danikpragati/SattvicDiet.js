import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const SattvicDiet = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>  </Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://static.toiimg.com/thumb/imgsize-23456,msid-105968419,width-600,resizemode-4/105968419.jpg' }}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.textContent}>
            A sattvic diet, rooted in Ayurvedic principles, emphasizes pure, natural, and balanced foods to promote clarity, calmness, and spiritual growth. It includes fresh fruits, vegetables, whole grains, nuts, seeds, legumes, and dairy products like milk and ghee, focusing on seasonal and organic produce. Avoiding processed, stale, or overly spicy foods, this diet is designed to nurture the body and mind, fostering health and vitality. Sattvic eating encourages mindful consumption, aligning with ethical practices and compassion, supporting not only physical well-being but also mental and spiritual harmony.
          </Text>
        </View>

        <View style={styles.dumboContainer}>
          <Text style={styles.dumboText}>
            Famous Recipes
          </Text>
        </View>

        <TouchableOpacity style={styles.recipeContainer}>
          <Image
            source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lRyAgylrJTCnMgf9YIQoPQ3S7iXn3KLITf3Cqw4_g-Ry0=s900-c-k-c0x00ffffff-no-rj' }}
            style={styles.youtubeImage}
          />
          <Text style={styles.recipeText}>
            Click here for famous recipes
          </Text>
        </TouchableOpacity>

        <View>

            <Text>

                   


            </Text>
        </View>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'yellow',
    width: 400,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: -5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textContent: {
    fontSize: 16,
    textAlign: 'justify',
    color: 'black',
  },
  imageContainer: {
    marginVertical: -70,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  dumboContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  dumboText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft:20
  },
  recipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: 400,
    height:100
  },
  youtubeImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft:-10
    
  },
  recipeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SattvicDiet;
