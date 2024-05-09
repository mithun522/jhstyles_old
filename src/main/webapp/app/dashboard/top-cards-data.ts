import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface topcard {
  bgcolor: string;
  icon: IconProp;
  title: string;
  subtitle: string;
}

export const topcards: topcard[] = [
  {
    bgcolor: 'success',
    icon: 'dollar-sign',
    title: '$21k',
    subtitle: 'Yearly Earning',
  },
  {
    bgcolor: 'danger',
    icon: 'dollar-sign',
    title: '$1k',
    subtitle: 'Refund given',
  },
  {
    bgcolor: 'warning',
    icon: 'basket-shopping',
    title: '456',
    subtitle: 'Yearly Project',
  },
  {
    bgcolor: 'info',
    icon: 'bag-shopping',
    title: '210',
    subtitle: 'Weekly Sales',
  },
];
