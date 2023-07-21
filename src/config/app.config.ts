interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Editor', 'Reporter'],
  tenantName: 'Publisher',
  applicationName: 'Sangri Today',
  addOns: ['file', 'notifications', 'chat'],
};
