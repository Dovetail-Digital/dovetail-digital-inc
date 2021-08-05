import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import { FaFacebook, FaLinkedin, } from 'react-icons/fa';

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/careers',
      label: 'Careers',
    },
    {
      path: 'mailto:hello@dovetaildigital.ca',
      label: 'Contact',
    },
  ],
  socials: [
    {
      path: 'https://www.facebook.com/dovetaildigital',
      label: 'Facebook',
      name: 'facebook',
      icon: <FaFacebook />,
    },
    {
      path: 'https://www.linkedin.com/company/dovetaildigital/',
      label: 'LinkedIn',
      name: 'linkedIn',
      icon: <FaLinkedin />,
    },
  ]
};
