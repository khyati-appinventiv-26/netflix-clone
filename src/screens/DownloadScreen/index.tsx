import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

import { Icons } from '../../assets';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    name : string

   
}




const DownloadScreen: React.FC = ({ navigation }:any) => {

    const downloadedMovies = useSelector((state: any) => state.downloads.downloadedMovies as Movie[]);
console.log(downloadedMovies,'090909');

    const handleDownloads = (movieData: Movie) => {
        navigation.navigate('VideoPlayer', { movieData });
        console.log(movieData,'llllll');
        
    };

    const renderItem = ({ item }: { item: Movie }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleDownloads(item)}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.name? item.name : item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Top Banner */}
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.touch} onPress={() => navigation.goBack()}>
                    <Image source={Icons.arrowLeft} style={styles.imgArr} />
                </TouchableOpacity>
                <Text style={styles.header}>Downloads</Text>
                <Icon name="download" size={24} color="white" style={{ marginTop: 50 }} />
            </View>

            <View style={styles.listContainer}>
                {downloadedMovies.length > 0 ? (
                    <FlatList
                        data={downloadedMovies}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id?.toString()}
                    />
                ) : (
                    <Text style={styles.emptyText}>No downloads available.</Text>
                )}
            </View>
        </View>
    );
};

export default DownloadScreen;
