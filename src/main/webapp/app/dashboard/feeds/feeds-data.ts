import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Feed {
  class: string;
  icon: IconProp;
  task: string;
  time: string;
}

export const Feeds: Feed[] = [
  {
    class: 'bg-info',
    icon: 'bell',
    task: 'You have 4 pending tasks.',
    time: 'Just Now',
  },
  {
    class: 'bg-success',
    icon: 'desktop',
    task: 'Server #1 overloaded.',
    time: '2 Hours ago',
  },
  {
    class: 'bg-success',
    icon: 'desktop',
    task: 'Server #2 overloaded.',
    time: 'few minutes ago',
  },
  {
    class: 'bg-warning',
    icon: 'shopping-bag',
    task: 'New order received.',
    time: '31 May',
  },
  {
    class: 'bg-danger',
    icon: 'user',
    task: 'New user registered.',
    time: '30 May',
  },
  {
    class: 'bg-primary',
    icon: 'user',
    task: 'You have new password.',
    time: '21 May',
  },
];
