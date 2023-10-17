import http from "../httpServices";

const relative_path = "myrecharge/account/";

export async function quick_register(form: any) {
  return http.post(relative_path + "quick-register", form);
}

export function register(account: any) {
  return http.post(relative_path + "register", account);
}

export function login(credentials: any) {
  return http.post(relative_path + "login", credentials);
}

export function forgot_password(form: any) {
  return http.post(relative_path + "forgot-password", form);
}

export function validate_password_reset_code(form: any) {
  return http.post(relative_path + "validate-password-reset-code", form);
}

export function reset_password(form: any) {
  return http.post(relative_path + "reset-password", form);
}

export function change_password(form: any) {
  return http.post(relative_path + "change-password", form);
}

export function customer_profile_update(form: any) {
  return http.post(relative_path + "customer-profile-update", form);
}

export function update_information(form: any) {
  return http.post(relative_path + "update-information", form);
}
