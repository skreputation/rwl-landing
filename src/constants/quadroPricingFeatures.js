/* eslint-disable import/prefer-default-export */
export const QUADRO_PRICING_CATEGORY_ESSENTIAL = { id: 'ESSENTIALS', name: 'Essentials', description: 'essentials-description' };
export const QUADRO_PRICING_CATEGORY_PRO = { id: 'PRO', name: 'Pro', description: 'pro-description' };
export const QUADRO_PRICING_CATEGORY_ENTERPRISE = { id: 'ENTERPRISE', name: 'Enterprise', description: 'enterprise-description' };
export const QUADRO_PRICING_CATEGORY_ENTERTAINMENT = {
  id: 'CONNECT',
  name: 'Connect',
  description: 'entertainment-description'
};
export const QUADRO_PRICING_CATEGORIES = {
  CLASSIC: [QUADRO_PRICING_CATEGORY_ESSENTIAL, QUADRO_PRICING_CATEGORY_PRO, QUADRO_PRICING_CATEGORY_ENTERPRISE],
  ENTERTAINMENT: [QUADRO_PRICING_CATEGORY_ENTERTAINMENT]
};

export const QUADRO_PRICING_FEATURES = {
  PMS: [
    {
      feature: 'pricing-pms-management-dashboard-title',
      description: 'pricing-pms-management-dashboard-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-operations-timeline-title',
      description: 'pricing-pms-operations-timeline-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-front-office-management-title',
      description: 'pricing-pms-front-office-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-space-management-title',
      description: 'pricing-pms-space-management-description',
      essentials: 'Up to 20',
      pro: '40 - 80',
      enterprise: '80+'
    },
    {
      feature: 'pricing-pms-user-roles-title',
      description: 'pricing-pms-user-roles-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-promotional-codes-title',
      description: 'pricing-pms-promotional-codes-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-customer-management-title',
      description: 'pricing-pms-customer-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-payments-module-title',
      description: 'pricing-pms-payments-module-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-hosted-booking-engine-title',
      description: 'pricing-pms-hosted-booking-engine-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-reports-title',
      description: 'pricing-pms-reports-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-scheduled-data-export-title',
      description: 'pricing-pms-scheduled-data-export-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-analytics-title',
      description: 'pricing-pms-analytics-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-rate-management-title',
      description: 'pricing-pms-rate-management-description',
      essentials: 'Up to 3 Rates',
      pro: 'Up to 10 Rates',
      enterprise: 'Up to 20 Rates'
    },
    {
      feature: 'pricing-pms-occupancy-availability-management-title',
      description: 'pricing-pms-occupancy-availability-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-alert-management-title',
      description: 'pricing-pms-alert-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-task-management-title',
      description: 'pricing-pms-task-management-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-action-log-title',
      description: 'pricing-pms-action-log-description',
      essentials: '3 Months',
      pro: '6 Months',
      enterprise: '12 Months'
    },
    {
      feature: 'pricing-pms-integration-market-place-title',
      description: 'pricing-pms-integration-market-place-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-api-access-support-title',
      description: 'pricing-pms-api-access-support-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pms-multiproperty-advanced-capabilities-title',
      description: 'pricing-pms-multiproperty-advanced-capabilities-description',
      essentials: false,
      pro: 'Up to 3',
      enterprise: 'Up to 5'
    },
    {
      feature: 'pricing-pms-personalized-property-settings-title',
      description: 'pricing-pms-personalized-property-settings-description',
      essentials: true,
      pro: true,
      enterprise: true
    }
  ],
  FNB: [
    {
      feature: 'pricing-fnb-cashier-registry-title',
      description: 'pricing-fnb-cashier-registry-description',
      essentials: '1 Outlet',
      pro: 'Up to 3 Outlets',
      enterprise: '3+ Outlets'
    },
    {
      feature: 'pricing-fnb-centralized-reservation-title',
      description: 'pricing-fnb-centralized-reservation-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-kitchen-management-title',
      description: 'pricing-fnb-kitchen-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-table-side-ordering-title',
      description: 'pricing-fnb-table-side-ordering-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-compatible-with-any-device-title',
      description: 'pricing-fnb-compatible-with-any-device-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-built-in-crm-module-title',
      description: 'pricing-fnb-built-in-crm-module-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-space-management-title',
      description: 'pricing-fnb-space-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-data-analysis-title',
      description: 'pricing-fnb-data-analysis-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-revenue-management-title',
      description: 'pricing-fnb-revenue-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-inventory-management-title',
      description: 'pricing-fnb-inventory-management-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-multi-outlet-capabilities-title',
      description: 'pricing-fnb-multi-outlet-capabilities-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-pms-integration-title',
      description: 'pricing-fnb-pms-integration-description',
      essentials: false,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-fnb-personalized-settings-title',
      description: 'pricing-fnb-personalized-settings-description',
      essentials: false,
      pro: true,
      enterprise: true
    }
  ],
  POP: [
    {
      feature: 'pricing-pop-cashier-registry-title',
      description: 'pricing-pop-cashier-registry-description',
      essentials: '1 Outlet',
      pro: 'Up to 3 Outlet',
      enterprise: '3+ Outlet'
    },
    {
      feature: 'pricing-pop-compatible-with-any-device-title',
      description: 'pricing-pop-compatible-with-any-device-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pop-inventory-management-title',
      description: 'pricing-pop-inventory-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pop-built-in-crm-module-title',
      description: 'pricing-pop-built-in-crm-module-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pop-multi-outlet-capabilities-title',
      description: 'pricing-pop-multi-outlet-capabilities-description',
      essentials: true,
      pro: true,
      enterprise: true
    },
    {
      feature: 'pricing-pop-revenue-management-title',
      description: 'pricing-pop-revenue-management-description',
      essentials: true,
      pro: true,
      enterprise: true
    },

    {
      feature: 'pricing-pop-personalized-settings-title',
      description: 'pricing-pop-personalized-settings-description',
      essentials: true,
      pro: true,
      enterprise: true
    }
  ],
  ENTERTAINMENT: [
    {
      feature: 'pricing-entertainment-tv-on-demand-title',
      description: 'pricing-entertainment-tv-on-demand-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-casting-ariplay-title',
      description: 'pricing-entertainment-casting-ariplay-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-e-commerce-services-title',
      description: 'pricing-entertainment-e-commerce-services-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-native-apps-title',
      description: 'pricing-entertainment-native-apps-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-map-city-title',
      description: 'pricing-entertainment-map-city-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-guest-messaging-title',
      description: 'pricing-entertainment-guest-messaging-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-housekeeping-module-title',
      description: 'pricing-entertainment-housekeeping-module-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-video-and-music-title',
      description: 'pricing-entertainment-video-and-music-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-weather-title',
      description: 'pricing-entertainment-weather-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-live-airport-information-title',
      description: 'pricing-entertainment-live-airport-information-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-voice-commands-title',
      description: 'pricing-entertainment-voice-commands-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-kids-lock-title',
      description: 'pricing-entertainment-kids-lock-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-iot-capabilities-title',
      description: 'pricing-entertainment-iot-capabilities-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-system-dashboard-title',
      description: 'pricing-entertainment-system-dashboard-description',
      connect: true
    },

    {
      feature: 'pricing-entertainment-fully-customizable-templates-title',
      description: 'pricing-entertainment-fully-customizable-templates-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-pms-integration-title',
      description: 'pricing-entertainment-pms-integration-description',
      connect: true
    },
    {
      feature: 'pricing-entertainment-in-app-discount-title',
      description: 'pricing-entertainment-in-app-discount-description',
      connect: true
    }
  ]
};
