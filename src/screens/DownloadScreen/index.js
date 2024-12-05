// screens/DownloadScreen.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import styles from'./style'

const DownloadScreen = () => {
    const downloadedMovies = useSelector((state) => state.downloads.downloadedMovies);
    const navigation = useNavigation()

    const handleDownloads = (movieData) => {
        
        navigation.navigate('VideoPlayer', { movieData })
    }

    const renderItem = ({ item }) => (
        
            
            <TouchableOpacity style={styles.card}  onPress={() =>handleDownloads(item)}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
       
    )

    return (
        <View style={styles.container}>
            {/* Top Banner */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.goBack()}><Image source={Icons.arrowLeft} style={styles.imgArr} /></TouchableOpacity>
                <Text style={styles.header}>Downloads</Text>
                <Fontisto name="download" size={24} color="white" style={{ marginTop: 50 }} />
            </View>

            
            <View style={styles.listContainer}>
                {downloadedMovies.length > 0 ? (
                    <FlatList
                        data={downloadedMovies}
                        renderItem={renderItem}
                    />
                ) : (
                    <Text style={styles.emptyText}>No downloads available.</Text>
                )}
            </View>
        </View>
    );
};

export default DownloadScreen;


