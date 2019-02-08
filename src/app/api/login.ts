import { LoginEntity } from '../shared/models/login';

// Just a fake loginAPI
export const isValidLogin = (loginInfo: LoginEntity): boolean =>
  loginInfo.login === 'admin' && loginInfo.password === 'test';
