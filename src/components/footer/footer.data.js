import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

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
      path: '/',
      label: 'Adversite',
    },
    {
      path: '/',
      label: 'Supports',
    },
    {
      path: '/',
      label: 'Marketing',
    },
    {
      path: 'mailto:admin@dovetaildigital.ca',
      label: 'Contact',
    },
  ],
  socials: [
    {
      path: '/',
      label: 'Facebook',
      name: 'facebook',
      icon: <FaFacebook />,
    },
    {
      path: '/',
      label: 'Twitter',
      name: 'twitter',
      icon: <FaTwitter />,
    },
    {
      path: '/',
      label: 'Github',
      name: 'github',
      icon: <FaGithub />,
    },
    {
      path: '/',
      label: 'Dribbble',
      name: 'dribbble',
      icon: <FaDribbble />,
    },
  ]
};
