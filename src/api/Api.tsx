import axios, { AxiosResponse } from 'axios';

interface ConfigType {
  baseURL: string;
  token: string;
  apiKEY: string;
}

const Config: ConfigType = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjczYWE0NDEyMDc4NDM5YmE3NmMzZmZjN2Y3ZjEwNCIsIm5iZiI6MTczMDk3MzMyNC4xMTExNTc3LCJzdWIiOiI2NzJjOGNmZjliN2UwOWNmZGNjNDJiYjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.CoqfuekpaZ-FgiRBxQG38vsIpOiMYBEnqRhi359BLcU',
  apiKEY: '8673aa4412078439ba76c3ffc7f7f104',
};

interface MovieResponse {
  results: Array<any>;
}

interface APIResponse<T> {
  success: boolean;
  data: any;
  status?: number;
  message ?:string
}

export const getUpcomingMovies = async (): Promise<APIResponse<MovieResponse>> => {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `${Config.baseURL}/upcoming`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      }
    );
    const data = response.data;
    const status = response.status;
    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getNowPlayingMovies = async (): Promise<APIResponse<MovieResponse>> => {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `${Config.baseURL}/now_playing`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      }
    );
    const data = response.data;
    const status = response.status;
    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getPopularMovies = async (): Promise<APIResponse<MovieResponse>> => {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `${Config.baseURL}/popular`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      }
    );
    const data = response.data;
    const status = response.status;
    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getTopRatedMovies = async (): Promise<APIResponse<MovieResponse>> => {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      }
    );
    const data = response.data;
    const status = response.status;
    return { success: true, data, status };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const getMovieVideos = async (movieId: number): Promise<AxiosResponse<any>> => {
  const response: AxiosResponse<any> = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${Config.apiKEY}&language=en-US`
  );
  return response;
};

export const searchMovies = async (query: string): Promise<APIResponse<MovieResponse>> => {
  if (!query) {
    return { success: false, data: 'Search query cannot be empty!' };
  }

  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      }
    );
    const data = response.data;
    return { success: true, data: data.results };
  } catch (error) {
    console.log(error);
    return { success: false, data: error };
  }
};

export const fetchRecommended = async (): Promise<APIResponse<MovieResponse>> => {
  try {
    const response: AxiosResponse<MovieResponse> = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: Config.apiKEY,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error: any) {
    return { success: false, message: error.message , data : error };
  }
};

export const getPopularTVShows = async (): Promise<APIResponse<any>> => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/tv/on_the_air', {
      params: {
        api_key: Config.apiKEY,
      },
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data.results };
  } catch (error: any) {
    console.error('Error fetching popular TV shows:', error);
    return { success: false, message: error.message ,data : error };
  }
};

export const getTopRatedTVShows = async (): Promise<APIResponse<any>> => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/tv/top_rated', {
      params: {
        api_key: Config.apiKEY,
      },
      headers: {
        Authorization: `Bearer ${Config.token}`,
      },
    });
    return { success: true, data: response.data.results };
  } catch (error: any) {
    console.error('Error fetching top rated TV shows:', error);
    return { success: false, message: error.message ,data : error };
  }
};
