import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

export const Manifestation = () => {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://i.cdn.newsbytesapp.com/images/l2520230904181838.jpeg' }}
            style={styles.image}
          />
        </View>

        <View style={styles.contentContainer}>
          <ScrollView>
            <Text style={styles.textContent}>
              Manifestation is the process of turning your desires into reality through focused intention and belief. To practice manifestation, start by clearly defining your goals. Visualize them vividly and create positive affirmations to reinforce your intentions. Write these affirmations down and repeat them daily, believing deeply in their truth. Maintain a positive mindset, staying grateful for what you have and trusting the universe to deliver. Actively work towards your goals, taking inspired actions that align with your vision. Finally, be patient and open to receiving, knowing that the universe will manifest your desires in the perfect time and way. To enhance your manifestation practice, consider meditating regularly to clear your mind and strengthen your focus. Surround yourself with positivity, including people, environments, and media that support your goals. Keep a manifestation journal to track your progress and reflect on any signs or synchronicities that appear along your journey. Embrace gratitude by acknowledging and celebrating small successes, as this raises your vibration and attracts more positive experiences. Remember that setbacks are part of the process; stay persistent and adaptable, always aligning your thoughts, emotions, and actions with your desired outcome.
            </Text>
          </ScrollView>
        </View>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            How to Manifest?
          </Text>
        </View>

        <View style={styles.stepsContentContainer}>
          <ScrollView>
            <Text style={styles.stepText}>
              1. <Text style={styles.boldText}>Define Your Goals:</Text> Clearly identify what you want to achieve.
            </Text>
            <Text style={styles.stepText}>
              2. <Text style={styles.boldText}>Visualize:</Text> Picture your goals vividly in your mind.
            </Text>
            <Text style={styles.stepText}>
              3. <Text style={styles.boldText}>Create Affirmations:</Text> Develop positive statements that affirm your goals.
            </Text>
            <Text style={styles.stepText}>
              4. <Text style={styles.boldText}>Repeat Daily:</Text> Recite your affirmations every day with belief.
            </Text>
            <Text style={styles.stepText}>
              5. <Text style={styles.boldText}>Maintain Positivity:</Text> Stay grateful and positive about your current situation.
            </Text>
            <Text style={styles.stepText}>
              6. <Text style={styles.boldText}>Take Action:</Text> Work towards your goals with inspired actions.
            </Text>
            <Text style={styles.stepText}>
              7. <Text style={styles.boldText}>Be Patient:</Text> Trust the process and be open to receiving your desires.
            </Text>
            <Text style={styles.stepText}>
              8. <Text style={styles.boldText}>Meditate:</Text> Regularly meditate to clear your mind and focus.
            </Text>
            <Text style={styles.stepText}>
              9. <Text style={styles.boldText}>Surround with Positivity:</Text> Engage with positive people, environments, and media.
            </Text>
            <Text style={styles.stepText}>
              10. <Text style={styles.boldText}>Keep a Journal:</Text> Track your progress and note any signs or synchronicities.
            </Text>
            <Text style={styles.stepText}>
              11. <Text style={styles.boldText}>Celebrate Successes:</Text> Acknowledge and celebrate small victories.
            </Text>
            <Text style={styles.stepText}>
              12. <Text style={styles.boldText}>Stay Persistent:</Text> Adapt and persist through setbacks, aligning your thoughts and actions with your desired outcomes.
            </Text>
          </ScrollView>
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
    backgroundColor: "#9ED3F5",
    width: 400,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: -30,
    maxHeight: 300,
  },
  headerContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
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
  stepsContentContainer: {
    backgroundColor: '#fff',
    width: 400,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop:10
    
  },
  stepText: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 10,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Manifestation;
