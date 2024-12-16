import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Images } from '../../assets';
import { useDispatch } from 'react-redux';
import { completeTutorial } from '../../reduxPersist/tutorialSlice';
import styles from './style';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Slide {
  id: string;
  title: string;
  description: string;
  image?: any; 
}

const slides: Slide[] = [
  {
    id: '1',
    title: 'Unlimited entertainment, one low price',
    description: 'Stream your favorite movies and TV shows.',
  },
  {
    id: '2',
    title: 'Download and watch offline',
    description: 'Always have something to watch.',
    image: Images.Img2,
  },
  {
    id: '3',
    title: 'Cancel online anytime',
    description: 'Join today, no reason to wait.',
    image: Images.Img3,
  },
  {
    id: '4',
    title: 'Watch everywhere',
    description: 'Stream on your phone, tablet, laptop, TV, and more.',
    image: Images.Img4,
  },
];

const TutorialScreen: React.FC = ({navigation} : any) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dispatch = useDispatch();

  const finishTutorial = () => {
    dispatch(completeTutorial());
    navigation.replace('login');
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <ImageBackground style={styles.container} source={currentIndex === 0 ? Images.ImgBg : Images.Img1} resizeMode="stretch">
      <View style={styles.overlay}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}
        >
          {slides.map((slide) => (
            <View key={slide.id} style={styles.slide}>
              {slide.image && <Image source={slide.image} style={styles.image} />}
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.description}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.getStartedButton} onPress={finishTutorial}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default TutorialScreen;
