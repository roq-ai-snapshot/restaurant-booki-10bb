interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Restaurant Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Owner', 'Restaurant Manager'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Edit personal information', 'Make a reservation', 'Place an order', 'View menus'],
  ownerAbilities: ['Manage restaurant information', 'Manage menus', 'Manage bookings', 'Manage tables'],
  getQuoteUrl: 'https://app.roq.ai/proposal/ac3795ed-7c52-459e-8e38-ed06ccd376e9',
};
