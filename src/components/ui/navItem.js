import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BookIcon from '@mui/icons-material/Book';
import EmailIcon from '@mui/icons-material/Email';
export const navItemList = [
  {
    id: 0,
    icon: <HomeIcon />,
    label: 'Home',
    route: '#home',
  },
  {
    id: 1,
    icon: <PeopleAltIcon />,
    label: 'About',
    route: '#about',
  },
  {
    id: 2,
    icon: <SummarizeIcon />,
    label: 'Resume',
    route: '#resume',
  },
  {
    id: 3,
    icon: <BookIcon />,
    label: 'Project',
  },
  {
    id: 4,
    icon: <EmailIcon />,
    label: 'Contact',
  },
];
