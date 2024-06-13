import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined'
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined'
import GitHubIcon from '@mui/icons-material/GitHub'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import ArticleIcon from '@mui/icons-material/Article'
const main = [
  {
    display: 'home',
    path: '/',
    icon: <HomeOutlinedIcon />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <SlideshowOutlinedIcon />,
    state: 'movie',
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutlinedIcon />,
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlinedIcon />,
    state: 'search',
  },
]

const user = [
  {
    display: 'favorites',
    path: '/favorites',
    icon: <FavoriteBorderOutlinedIcon />,
    state: 'favorite',
  },
  {
    display: 'reviews',
    path: '/reviews',
    icon: <RateReviewOutlinedIcon />,
    state: 'reviews',
  },
  {
    display: 'password update',
    path: '/password-update',
    icon: <LockResetOutlinedIcon />,
    state: 'password.update',
  },
]

const footer = [
  {
    display: 'about',
    path: 'https://anshroshan.vercel.app/about',
    icon: <GitHubIcon />,
    state: 'about',
  },
  {
    display: 'projects',
    path: 'https://anshroshan.vercel.app/projects',
    icon: <AccountTreeIcon />,
    state: 'projects',
  },
  {
    display: 'blog',
    path: 'https://anshroshan.vercel.app/blog',
    icon: <AccountCircleIcon />,
    state: 'contact',
  },
  {
    display: 'resume',
    path: 'https://anshroshan.vercel.app/',
    icon: <ArticleIcon />,
    state: 'resume',
  },
]

const menuConfigs = { main, user, footer }

export default menuConfigs
