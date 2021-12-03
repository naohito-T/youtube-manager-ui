import { AxiosInstance } from 'axios';

/**
 * @desc axiosをそのまま呼び出すのではなく、axiosをラップしたリクエストクライアントクラスを使用する。
 */
export abstract class RequestAPI {
  constructor(protected axios: AxiosInstance) {}
}
