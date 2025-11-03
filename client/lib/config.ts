import devConfig from '../../config/dev.json';
import prodConfig from '../../config/prod.json';
import stagingConfig from '../../config/staging.json';

export interface AppConfig {
  appShortName: string;
  appName: string;
  companyName: string;
  siteTitle: string;
  appStoreUrl: string;
  playStoreUrl: string;
  webAppUrl: string;
  contactApiUrl: string;
  subscriptionApiUrl: string;
  videoId: string;
  allaboutdnt: string;
  adr: string;
  consumerArbitration: string;
  linkedInSatya: string;
  linkedInSavir: string;
  kailasaAppUrl: string;
  kailasaAppDomain: string;
  kailasaApp: string;
  youtubeKailasa: string;
  linkedInKailasa: string;
  instagramKailasa: string;
  facebookKailasa: string;
  infoEmail: string;
  supportEmail: string;
  officeAddress: string;
}

function getConfig(): AppConfig {
  const mode = import.meta.env.MODE || 'development';
  console.log('Loading config for mode:', mode);
  
  let selectedConfig: AppConfig;
  switch (mode) {
    case 'production':
      selectedConfig = prodConfig as AppConfig;
      break;
    case 'staging':
      selectedConfig = stagingConfig as AppConfig;
      break;
    default:
      selectedConfig = devConfig as AppConfig;
      break;
  }
  
  console.log('Selected config:', {
    contactApiUrl: selectedConfig.contactApiUrl,
    subscriptionApiUrl: selectedConfig.subscriptionApiUrl
  });
  
  return selectedConfig;
}

export const config = getConfig();

