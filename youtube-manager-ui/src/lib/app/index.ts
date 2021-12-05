import { APIWithoutToken } from '../helper/baseAxios';
import { IRequestHomeAPI } from './service'; // interface import
import { RequestHomeAPI } from './request';

export interface API {
  home: IRequestHomeAPI;
}

const home = new RequestHomeAPI(APIWithoutToken());

export const api: API = {
  home,
};
