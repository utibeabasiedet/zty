import http from "../httpServices";
import config from "../config";

const relative_path = "myrecharge/recharge/";

export function get_current_user_default_recharge_details() {
  return http.get(relative_path + "get-current-user-default-recharge-details");
}

export function get_payment_gateway_keys() {
  return http.get(relative_path + "payment-gateway-services");
}

export function get_states_discos() {
  return http.get(relative_path + "states-discos");
}

export function validate_customer(validate_customer_payload: any) {
  return http.post(
    relative_path + "validate-customer",
    validate_customer_payload
  );
}

export function recharge_discount(discount: number) {
  return http.post(relative_path + "discount", discount);
}

export function recharge_meter(recharge_payload: any) {
  return http.post(relative_path + "recharge-meter", recharge_payload);
}

export function get_transactions(userId: string) {
  return http.get(relative_path + "transactions/" + userId);
}

export function get_meters(userId: string) {
  return http.get(relative_path + "meters/" + userId);
}

export function get_cards(userId: string) {
  return http.get(relative_path + "get-customer-payment-card-history/");
}

export function retry_recharge(retry_recharge_payload: any) {
  return http.post(
    relative_path + "customer-recharge-failed-payment",
    retry_recharge_payload
  );
}

export function get_recharge_fees() {
  return config.serviceCharges;
}

export function get_customer_card_history() {
  //return http.get(relative_path + "get-customer-payment-card-history");
  const cardHistory = [
    {
      cardId: 1,
      cardNumber: "XXXX XXXX XXXX 1234",
      cardType: "MASTERCARD",
      bank: "UBA",
    },
    // {
    //   cardId: 2,
    //   cardNumber: "XXXX XXXX XXXX 5678",
    //   cardType: "VISA",
    //   bank: "First Bank",
    // },
    // {
    //   cardId: 3,
    //   cardNumber: "XXXX XXXX XXXX 9012",
    //   cardType: "VISA",
    //   bank: "Wema Bank",
    // },
    {
      cardId: 4,
      cardNumber: "XXXX XXXX XXXX 3456",
      cardType: "MASTERCARD",
      bank: "Zenith",
    },
  ];

  return cardHistory;
}
