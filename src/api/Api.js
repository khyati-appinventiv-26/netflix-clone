import axios from 'axios';
const Config= {
    baseURL : 'https://api.themoviedb.org/3/movie',
    token : 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjczYWE0NDEyMDc4NDM5YmE3NmMzZmZjN2Y3ZjEwNCIsIm5iZiI6MTczMDk3MzMyNC4xMTExNTc3LCJzdWIiOiI2NzJjOGNmZjliN2UwOWNmZGNjNDJiYjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CoqfuekpaZ-FgiRBxQG38vsIpOiMYBEnqRhi359BLcU',
    apiKEY : '8673aa4412078439ba76c3ffc7f7f104'
}

export const getUpcomingMovies = async () => {
    try{
        const response = await axios.get(`${Config.baseURL}/upcoming` ,
            {
                headers:{
                    Authorization: `Bearer ${Config.token}`
                }
            }
        );
        const data = response.data
        const status = response.status
        return {success: true , data: data, status : status}
    }
    
    catch(error){
        console.log(error);
        return{success : false , data : error}
    }
}

export const getNowPlayingMovies = async () => {
    try {
      const response = await axios.get(`${Config.baseURL}/now_playing`, {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      });
      const data = response.data;
      
      
      const status = response.status;
      return {success: true, data: data, status: status};
    } catch (error) {
      console.log(error);
      return {success: false, data: error};
    }
  };
  
  export const getPopularMovies = async () => {
    try {
      const response = await axios.get(`${Config.baseURL}/popular`, {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      });
      const data = response.data;
      const status = response.status;
      return {success: true, data: data, status: status};
    } catch (error) {
      console.log(error);
      return {success: false, data: error};
    }
  };
  
  export const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      });
      const data = response.data;
      // console.log(response.data.results[0].poster_path,'kkkkkk');
      
      const status = response.status;
      return {success: true, data: data, status: status};
    } catch (error) {
      console.log(error);
      return {success: false, data: error};
    }
  };

  export const getMovieVideos = async (movieId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Config.apiKEY}&language=en-US`
    );
    return response;
  };
  

  export const searchMovies = async (query) => {
    if (!query) {
      return { success: false, data: 'Search query cannot be empty!' };
    }
  
    try {
      const response = await axios.get( `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      });
      const data = response.data;
      
      
      return { success: true, data: data.results };
    } catch (error) {
      console.log(error);
      return { success: false, data: error };
    }
  };

  export const fetchRecommended = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
        params: {
          api_key:Config.apiKEY,
        },
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

export const getPopularTVShows = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', {
      params: {
        api_key: Config.apiKEY, // API key from Config
      },
      headers: {
        Authorization: `Bearer ${Config.token}`, // Token for authorization
      },
    });

    // console.log('Popular TV Shows Response:>>>>>>>>>>>>>>>', response.data);
    return { success: true, data: response.data.results };
  } catch (error) {
    console.error('Error fetching popular TV shows:', error);
    return { success: false, message: error.message };
  }
};

export const getTopRatedTVShows = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
      params: {
        api_key: Config.apiKEY, // API key from Config
      },
      headers: {
        Authorization: `Bearer ${Config.token}`, // Token for authorization
      },
    });

    // console.log('Top Rated TV Shows Response:///////////', response.data);
    return { success: true, data: response.data.results };
  } catch (error) {
    console.error('Error fetching top rated TV shows:', error);
    return { success: false, message: error.message };
  }
};


  // export const searchMovie = async () {

  // }

// export const fetchMovies = async () => {
//     const response = await axios.get(`${BASE_URL}/movie/popular`, {
//         params: { api_key: API_KEY },
//     });

//     return response.data.results;
// };

// export const fetchMovieDetails = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
//         params: { api_key: API_KEY },
//     });
    
//     return response.data;
// };

// export const fetchMovieTrailer = async (movieId) => {
//     const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos`, {
//         params: { api_key: API_KEY },
//     });
   
//     const trailer = response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
//     return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
// };
