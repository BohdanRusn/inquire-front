

export interface IAuthData {
  id: number;
  name: string;
  email: string;
  lastLoginAt: string;
}
export interface IAuthResponse extends IAuthData{
  token: string;
}

export interface AuthStateProps {
  data: IAuthData | {};
  status: string;
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegisterData {
  name: string;
  email: string;
  password: string;
}

