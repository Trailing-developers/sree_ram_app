import React from 'react';
import { ScrollView, Text, View, Image, Dimensions, StyleSheet } from 'react-native';


const { width } = Dimensions.get('window');

const MahabharataImages = [
  "https://spiritualquotes.in/wp-content/uploads/2023/04/4-5-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/1-12-1024x1024.jpg",
  "https://spiritualquotes.in/wp-content/uploads/2023/04/16-5-1024x1024.jpg"
];

const GeetaImages = [
  "https://qph.cf2.quoracdn.net/main-qimg-984397ec72f969ff9e6fb3b20a51fa87-lq",
  "https://i.pinimg.com/736x/f5/d2/e2/f5d2e2d221fca60040496be8ec555523.jpg",
  "https://www.scrolldroll.com/wp-content/uploads/2019/07/Bhagavad-Gita-Quotes-1.jpg"
];

const VedasImages = [
  "https://spiritualquotes.in/wp-content/uploads/2023/03/50-1024x1024.jpg",
  "https://ancientscience.in/media/2017/11/Ancient-Science-Quotes-01.jpg"
];

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setActiveIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carouselContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      
    </View>
  );
};

export const QuotePage = () => {
  return (
    <ScrollView style={{ flex: 1, paddingBottom: 120 }}>
      <View>
        <Text style={styles.title}>
          Quotes from Mahabharata
        </Text>
        <ImageCarousel images={MahabharataImages} />
      </View>

      <View>
        <Text style={styles.title}>
          Quotes from Geeta
        </Text>
        <ImageCarousel images={GeetaImages} />
      </View>

      <View>
        <Text style={styles.title}>
          Quotes from Vedas
        </Text>
        <ImageCarousel images={VedasImages} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'left',
    color: 'black',
    marginTop: 20,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    position: 'relative', // Added to position Pagination component
  },
  carouselContainer: {
    height: 450,
    marginVertical: 20,
  },
  image: {
    width: width - 40,
    height: 450,
    borderRadius: 15,
    marginHorizontal: 20,
    resizeMode: 'cover'
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 10, // Adjusted to position dots above the images
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'yellow'
  },
  inactiveDot: {
    backgroundColor: '#FFFFFF'
  }
});

export default QuotePage;
