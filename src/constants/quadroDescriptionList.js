/* eslint-disable import/prefer-default-export */
import React from 'react';

import {
  DescriptionQuadroEntertainment,
  DescriptionQuadroEntertainmentTv,
  DescriptionQuadroFnb,
  DescriptionQuadroFnbSpaces,
  DescriptionQuadroPms,
  DescriptionQuadroPmsMobile,
  DescriptionQuadroPop,
  DescriptionQuadroPopAddress
} from '../assets';

export const QUADRO_DESCRIPTION_LIST = {
  PMS: {
    BASE_DESCRIPTIONS: {
      0: {
        title: 'Reservation Management',
        description: 'pms-reservation-management-description'
      },
      1: {
        title: 'Booking Engine',
        description: 'pms-booking-engine-description'
      },
      2: {
        title: 'Secure Payments',
        description: 'pms-stripe-description'
      },
      3: {
        title: '100% Responsive',
        description: 'pms-responsive-description'
      }
    },
    BASE_DESCRIPTIONS_IMAGE: <DescriptionQuadroPms />,
    OTHER_DESCRIPTIONS: {
      0: {
        title: 'Space Management',
        description: 'pms-space-management-description'
      },
      1: {
        title: 'Analytics Platform',
        description: 'pms-analytics-platform-description'
      },
      2: {
        title: 'Integrations Marketplace',
        description: 'pms-integration-marketplace-description'
      },
      3: {
        title: 'Revenue Management',
        description: 'pms-revenue-management-description'
      }
    },
    OTHER_DESCRIPTIONS_IMAGE: <DescriptionQuadroPmsMobile />
  },
  ENTERTAINMENT: {
    BASE_DESCRIPTIONS: {
      0: {
        title: 'TV & Entertainment',
        description: 'entertainment-tv-description'
      },
      1: {
        title: 'Airplay & Casting',
        description: 'entertainment-airplay-and-casting-description'
      },
      2: {
        title: 'System Dashboard',
        description: 'entertainment-system-dashboard-description'
      }
    },
    BASE_DESCRIPTIONS_IMAGE: <DescriptionQuadroEntertainment />,
    OTHER_DESCRIPTIONS: {
      0: {
        title: 'Native Apps',
        description: 'entertainment-native-apps-description'
      },
      1: {
        title: 'Guest Service',
        description: 'entertainment-guest-service-description'
      },
      2: {
        title: 'Complete Connectivity',
        description: 'entertainment-complete-connectivity-description'
      }
    },
    OTHER_DESCRIPTIONS_IMAGE: <DescriptionQuadroEntertainmentTv />
  },
  FNB: {
    BASE_DESCRIPTIONS: {
      0: {
        title: 'Central Reservations',
        description: 'fnb-central-reservations-description'
      },
      1: {
        title: 'Customer Management',
        description: 'fnb-customer-management-description'
      },
      2: {
        title: 'Multi-outlet Dashboard',
        description: 'fnb-multi-outlet-dashboard-description'
      }
    },
    BASE_DESCRIPTIONS_IMAGE: <DescriptionQuadroFnb />,
    OTHER_DESCRIPTIONS: {
      0: {
        title: '100% Responsive',
        description: 'fnb-100-responsive-description'
      },
      1: {
        title: 'Tableside Ordering',
        description: 'fnb-tableside-ordering-description'
      },
      2: {
        title: 'Open Integrations',
        description: 'fnb-open-integrations-description'
      }
    },
    OTHER_DESCRIPTIONS_IMAGE: <DescriptionQuadroFnbSpaces />
  },
  POP: {
    BASE_DESCRIPTIONS: {
      0: {
        title: 'Point of Sale',
        description: 'pop-description'
      },
      1: {
        title: 'Multipurpose Solution',
        description: 'pop-multipurpose-solution'
      }
    },
    BASE_DESCRIPTIONS_IMAGE: <DescriptionQuadroPop />,
    OTHER_DESCRIPTIONS: {
      0: {
        title: 'Customer Management',
        description: 'pop-customer-management-description'
      },
      1: {
        title: 'Sales Reporting',
        description: 'pop-sales-reporting-description'
      }
    },
    OTHER_DESCRIPTIONS_IMAGE: <DescriptionQuadroPopAddress />
  }
};
