/* eslint-disable import/prefer-default-export */
import React from 'react';
import { ROUTE_PARTNERS, ROUTE_CONTACT_US, ROUTE_INDEX, ROUTE_PRODUCTS } from '../router/routes';
import BGHome from '../assets/svg/bg-intro/bg-home.svg';
import BGProducts from '../assets/svg/bg-intro/bg-products.svg';
import BGCareers from '../assets/svg/bg-intro/bg-careers.svg';
import BGContact from '../assets/svg/bg-intro/bg-contact.svg';
import { BGEntertainment, BGFnb, BGPms, BGPop } from '../assets';

export const ROUTE_LIST = {
  HOME: {
    title: 'home',
    backgroundImage: BGHome,
    description: {
      0: 'we-build-tools',
      1: 'designed-to-enhance-the-guest-experience',
      2: 'through-advanced-decision-making-technologies'
    },
    route: ROUTE_INDEX
  },
  PRODUCTS: {
    title: 'products',
    backgroundImage: BGProducts,
    description: {
      0: 'we-build-tools',
      1: 'designed-to-enhance-the-guest-experience',
      2: 'through-advanced-decision-making-technologies'
    },
    route: ROUTE_PRODUCTS
  },
  CAREERS: {
    title: 'careers',
    backgroundImage: BGCareers,
    description: {
      0: 'we-are-partners',
      1: 'curious-ambitious-humble-hungry',
      2: 'sound-like-you-we-want-to-know'
    },
    route: ROUTE_PARTNERS
  },
  CONTACT: {
    title: 'contact-us',
    backgroundImage: BGContact,
    description: {
      0: 'we-build-tools',
      1: 'designed-to-enhance-the-guest-experience',
      2: 'through-advanced-decision-making-technologies'
    },
    route: ROUTE_CONTACT_US
  },
  FNB: {
    title: 'Fnb',
    productImage: <BGFnb />,
    description: {
      0: 'QUADRO FNB',
      1: 'FOOD & BEVERAGE MANAGER'
    }
  },
  POP: {
    title: 'Pop',
    productImage: <BGPop />,
    description: {
      0: 'Quadro POP',
      1: 'POINT OF SALE SYSTEM'
    }
  },
  PMS: {
    title: 'Pms',
    productImage: <BGPms />,
    description: {
      0: 'Quadro PMS',
      1: 'PROPERTY MANAGEMENT SYSTEM'
    }
  },
  ENTERTAINMENT: {
    title: 'Entertainment',
    productImage: <BGEntertainment />,
    description: {
      0: 'Quadro Entertainment',
      1: 'ENTERTAINMENT AND COMMUNICATION PLATFORM'
    }
  }
};
