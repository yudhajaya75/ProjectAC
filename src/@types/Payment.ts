export interface Payment {
  id: number;
  attributes: {
    PaymentsBank: string;
    provider: string;
    providerAccount: string;
    qrisScan: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
