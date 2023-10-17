import { User } from "@/types/account";
import config from "./config";
import jwt_decode from "jwt-decode";

// export function getUserToken() {
//   const token = localStorage.getItem(config.authKeyName);
//   return token ?? "";
// }
export function getUserToken() {
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem(config.authKeyName);
    return token ?? "";
  }
  return "";
}

export function setUserToken(securityToken: string) {
  localStorage.setItem(config.authKeyName, securityToken);
}

export function getUser(): User {
  const token = getUserToken();

  if (token === "") logout();

  try {
    const user = jwt_decode<User>(token);
    return user;
  } catch (e) {
    //logout();
  }

  return {
    emailAddress: "",
    mobileNumber: "",
    userId: "",
    exp: 0,
    iat: 0,
    nbf: 0,
  } as User;
}

// export function logout() {
//   localStorage.removeItem(config.authKeyName);
//   localStorage.clear();
//   window.location.href = "/";
// }
export function logout() {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem(config.authKeyName);
    localStorage.clear();
  }
  // window.location.href = "/";
}

export function formatNumberAsNaira(value: number) {
  // Check if the input is a valid integer
  if (!Number.isInteger(value)) {
    return "N0";
  }

  // Convert the integer to a comma-separated string
  return "N" + value.toLocaleString();
}
