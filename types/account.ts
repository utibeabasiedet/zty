export interface QuickLoginRequest {
  phoneNumber: string;
}

export interface User {
  emailAddress: string;
  mobileNumber: string;
  userId: string;
  exp: number;
  iat: number;
  nbf: number;
}
