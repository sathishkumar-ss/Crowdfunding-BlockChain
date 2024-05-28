import { createCampaign, dashboard, chat, profile,intro ,block} from '../assets';
import { useNavigate } from 'react-router-dom';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'intro',
    imgUrl:intro,
    link: '/profile2',
  },
  {
    name: 'chat',
    imgUrl: chat,
    link: 'chatbot',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'Coins',
    imgUrl: block,
    link: '/Coins',
  },  
];
