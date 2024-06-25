export function accountResponse(data: any): any {
  return {
    _id: data.id,
    name: data.name,
    routingNumber: data.routingNumber,
    accountNumbers: {
      masked: data.maskedAccountNumber,
      full: data?.fullAccountNumber,
    },
    balance: {
      available: data.balance.available,
      currency: data.balance.currency,
    },
    accountType: data.accountType,
    ifxType: data.ifxType,
    openedAt: data.openedAt,
  };
}
