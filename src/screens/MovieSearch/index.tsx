import React, { useEffect, useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { fetchRecommended, searchMovies } from '../../api/Api';
import { useNavigation } from '@react-navigation/native';
import { Icons } from '../../assets';
import styles from './style';

// TypeScript types
interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
}

const MovieSearch: React.FC = ({navigation} : any) => {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>('');
  

  useEffect(() => {
    const loadRecommended = async () => {
      try {
        const response = await fetchRecommended();
        if (response.success) {
          setMovies(response.data.results);
          setError('');
        } else {
          setError('Failed to load recommended movies.');
        }
      } catch {
        setError('Failed to load recommended movies.');
      }
    };

    loadRecommended();
  }, []);

  const handleSearch = async (text: string) => {
    setQuery(text);
    setError('');

    if (!text.trim()) {
      const recommended = await fetchRecommended();
      if (recommended.success) {
        setMovies(recommended.data.results);
        setError('');
      }
      return;
    }

    try {
      const response = await searchMovies(text);
      if (response.success && response.data.length > 0) {
        setMovies(response.data);
        setError('');
      } else {
        setMovies([]);
        setError("Oh darn. We don't have that.");
      }
    } catch {
      setMovies([]);
      setError("Oh darn. We don't have that.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.touch}>
          <Image source={Icons.arrowLeft} style={styles.imgArr} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('down')}>
          <Octicons
            style={{ marginRight: 15, marginBottom: 10 }}
            name="download"
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </View>

      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a movie & TV shows"
          placeholderTextColor="#aaa"
          value={query}
          onChangeText={handleSearch}
        />
        <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />
      </View>

      {/* Error Message */}
      {error && !movies.length ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={styles.listContainer}>
          <Text style={styles.txt}>Recommended TV Shows & Movies</Text>
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.movieCard}
                onPress={() =>
                  navigation.navigate('VideoPlayer', { movieData: item })
                }
              >
                <Image
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  style={styles.poster}
                />
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title || item.name}
                  </Text>
                  <Icon
                    name="play-circle-outline"
                    size={35}
                    color="#fff"
                    onPress={() =>
                      navigation.navigate('VideoPlayer', { movieData: item })
                    }
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default MovieSearch;
