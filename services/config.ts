const apiConfig = {
  baseUrl: "http://api.myrecharge.ng/",
  authKeyName: "x-auth-my-recharge-ng",
  apiKeyName: "x-my-recharge-api-key",
  apiKeyValue: "MPDvY7DrRqznEYL6Cnv7HDrqAzjnRQYOG9JxEsWdcjNnQY6nGu0fG",
  serviceCharges: 100,
  jwtConfig: {
    userKey: "my-recharge-auth",
    secret: "",
    expirationInMinutes: 1440,
  },
};

export default apiConfig;
