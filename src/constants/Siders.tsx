import { HiOutlineHome } from 'react-icons/hi';
import { GrOrganization } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

export const menuItems = [
  {
    label: 'Home',
    key: 'home',
    icon: <HiOutlineHome />,
    children: [
      {
        label: 'Add profile',
        key: 'add_profile',
        icon: <BsPerson />,
      },
      {
        label: 'All users',
        key: 'all_users',
        icon: <BsPerson />,
      },
    ],
  },
  {
    label: 'About us',
    key: 'about_us',
    icon: <GrOrganization />,
  },
  // {
  //   label: 'About us',
  //   key: 'about_us',
  //   icon: <GrOrganization />,
  // },
  // {
  //   label: 'About us',
  //   key: 'about_us',
  //   icon: <GrOrganization />,
  // },
];
