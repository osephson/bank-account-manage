interface Balance {
  available: string;
  currency: string;
}

interface AccountNumber {
  masked: string;
  full: string;
}

export interface Account {
  _id: string;
  name: string;
  routingNumber: string;
  accountNumbers: AccountNumber;
  balance: Balance;
  accountType: string;
  ifxType: string;
  openedAt: Date;
}
