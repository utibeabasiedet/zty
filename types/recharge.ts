export interface DiscoState {
  stateID: string;
  stateName: string;
  discoCode: string;
  discoName: string;
  discoLogo: string;
  serviceAvailable: true;
}

export interface ValidateCustomer {
  accountType: string;
  customerEmail: string;
  customerPhone: string;
  customerMeterNumber: string;
  stateId: string;
}
