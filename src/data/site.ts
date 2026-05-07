import type { Lang } from '~/i18n';

export const SITE = {
  name: 'Nidhal Dogga',
  domain: 'ndogga.com',
  url: 'https://ndogga.com',
} as const;

export const SKILL_CHIPS: Record<Lang, readonly string[]> = {
  en: [
    'Backend systems',
    'Distributed systems',
    'DDD',
    'Software architecture',
    'Agentic AI & LLM apps',
  ],
  fr: [
    'Systèmes backend',
    'Systèmes distribués',
    'DDD',
    'Architecture logicielle',
    'IA agentique & LLM',
  ],
} as const;

export const CONTACT = {
  email: 'dogga.nidhal@gmail.com',
  phone: '+33 7 58 72 85 23',
  phoneHref: 'tel:+33758728523',
  location: 'Paris, France',
} as const;

export const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/dogganidhal',
    handle: '@dogganidhal',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dogganidhal',
    handle: '/in/dogganidhal',
  },
  {
    label: 'Email',
    href: 'mailto:dogga.nidhal@gmail.com',
    handle: 'dogga.nidhal@gmail.com',
  },
] as const;

export type Social = (typeof SOCIALS)[number];
