import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const VratAahar = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>  </Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://www.healthifyme.com/blog/wp-content/uploads/2023/06/shutterstock_1684628152-1.jpg' }}
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.textContent}>
            Vrat Aahar, commonly known as fasting food, holds a significant place in Hindu traditions and rituals. It serves as more than just sustenance during periods of religious observance; it symbolizes spiritual discipline and purification of the body and mind. One should consume Vrat Aahar for its symbolic and spiritual significance. Beyond its dietary restrictions, Vrat Aahar fosters self-discipline, purity, and reverence. It offers a unique opportunity for individuals to detoxify both body and mind, aligning with higher spiritual principles. By abstaining from certain foods and embracing simplicity, practitioners cultivate inner strength, restraint, and mindfulness. Vrat Aahar serves as a reminder of one's devotion and commitment to spiritual growth, fostering a deeper connection with the divine. In essence, it nourishes not only the physical body but also the soul, offering a path to purification and spiritual enlightenment.
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

export default VratAahar;
