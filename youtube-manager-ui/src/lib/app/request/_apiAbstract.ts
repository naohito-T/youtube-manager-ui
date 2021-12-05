import { AxiosInstance, AxiosError } from 'axios';

/**
 * @desc axiosをそのまま呼び出すのではなく、axiosをラップしたリクエストクライアントクラスを使用する。
 */
export abstract class RequestAPI {
  constructor(protected axios: AxiosInstance) {}
}

/** カスタムエラーの生成 */
export class CustomError extends Error {
  public static generate = (e: AxiosError): AxiosError | Error => {
    if (!e.isAxiosError || !e.response) {
      return e;
    }
    return new CustomError(e.response.status, e.response?.data.message);
  };

  private _status?: number;

  public get status(): number | undefined {
    return this._status;
  }

  constructor(s?: number, msg?: string) {
    super(msg);
    this._status = s;
  }
}
