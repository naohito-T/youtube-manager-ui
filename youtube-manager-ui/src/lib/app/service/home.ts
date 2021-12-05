import { YoutubeVideo } from '../types/home';

export interface IRequestHomeAPI {
  fetchMostPopularVideos: () => Promise<YoutubeVideo[]>;
}
