import { IRequestHomeAPI } from '../service';
import { YoutubeVideo } from '../types/home';
import { RequestAPI, CustomError } from './_apiAbstract';

export class RequestHomeAPI extends RequestAPI implements IRequestHomeAPI {
  public fetchMostPopularVideos = async (): Promise<YoutubeVideo[]> => {
    return await this.axios
      .get<YoutubeVideo[]>('/api/popular')
      .then((r) => r.data)
      .catch((e) => {
        throw CustomError.generate(e);
      });
  };
}
