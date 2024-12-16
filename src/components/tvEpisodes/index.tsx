import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Alert } from 'react-native';

const TMDB_API_KEY = '8673aa4412078439ba76c3ffc7f7f104'; 
const BASE_URL = 'https://api.themoviedb.org/3';

interface Episode {
  id: number;
  name: string;
  still_path: string | null;
  overview: string;
}

interface Show {
  id: number;
  name: string;
}

const EpisodesList: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        // Fetch top-rated TV shows
        const topRatedResponse = await fetch(`${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}`);
        const topRatedData = await topRatedResponse.json();
        console.log(topRatedData,'llllllll');
        
        const topShow: Show = topRatedData.results[0]; // Pick the first top-rated show

        // Fetch episodes of season 1 for the selected show
        const seasonResponse = await fetch(
          `${BASE_URL}/tv/1398/season/1?api_key=${TMDB_API_KEY}`
        );
        const seasonData = await seasonResponse.json();

        setEpisodes(seasonData.episodes || []);
      } catch (error: any) {
        Alert.alert('Error', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  const renderEpisode = ({ item }: { item: Episode }) => (
    <View style={styles.episodeCard}>
      {item.still_path ? (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500/${item.still_path}` }}
          style={styles.episodeImage}
        />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.episodeInfo}>
        <Text style={styles.episodeTitle}>{item.name}</Text>
        <Text style={styles.episodeOverview}>{item.overview || 'No overview available.'}</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={episodes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderEpisode}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  episodeCard: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#222',
    borderRadius: 8,
    overflow: 'hidden',
  },
  episodeImage: {
    width: 120,
    height: 90,
  },
  placeholder: {
    width: 120,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 14,
  },
  episodeInfo: {
    flex: 1,
    padding: 10,
  },
  episodeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  episodeOverview: {
    color: '#ccc',
    marginTop: 5,
    fontSize: 14,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default EpisodesList;
