import { YoutubeVideo } from '../types/home';

export interface IRquestHomeAPI {
  fetchMostPopularVideos: () => YoutubeVideo[];
}
