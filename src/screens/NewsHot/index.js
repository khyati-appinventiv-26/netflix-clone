import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';
import styles from './style'




const NewAndHotSection = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        
        fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=8673aa4412078439ba76c3ffc7f7f104`)
            .then((response) => response.json())
            .then((data) => setContent(data.results))
            .catch((error) => console.error(error));
    }, []);

   
    const renderCarouselItem = ({ item }) => (
        <View style={styles.carouselItem}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w780${item.backdrop_path}` }}
                style={styles.carouselImage}
                resizeMode='stretch'
            />
            <View style={styles.overlay}>
                <Text style={styles.carouselTitle}>{item.title || item.name}</Text>
                <Text style={styles.carouselInfo}>
                    Release: {item.release_date || item.first_air_date || 'Unknown'}
                </Text>
                <Text style={styles.carouselDescription} numberOfLines={3}>
                    {item.overview}
                </Text>
            </View>
        </View>
    );

    // Render vertical list item
    const renderListItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={styles.listImage}
            />
            <View style={styles.listTextContainer}>
                <Text style={styles.listTitle}>{item.title || item.name}</Text>
                <Text style={styles.listSubtitle}>
                    Release: {item.release_date || item.first_air_date || 'Unknown'}
                </Text>
                <Text style={styles.listDetails}>
                    ⭐ Rating: {item.vote_average || 'N/A'} | 📈 Popularity: {item.popularity.toFixed(0)}
                </Text>
                <Text style={styles.listOverview} numberOfLines={2}>
                    {item.overview}
                </Text>
            </View>
        </View>
    );

    return (
        <ScrollView style={styles.container}>

            <FlatList
                data={content.slice(0, 5)}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderCarouselItem}
                keyExtractor={(item) => item.id.toString()}
            />


            <Text style={styles.sectionTitle}>Upcoming & Trending</Text>
            <FlatList
                data={content.slice(5)}
                renderItem={renderListItem}
                keyExtractor={(item) => item.id.toString()}
            />

        </ScrollView>
    );
};

export default NewAndHotSection;


