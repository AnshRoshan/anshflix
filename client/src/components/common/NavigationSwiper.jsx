import { Box } from '@mui/material'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const NavigationSwiper = ({ children }) => {
  return (
    <Box
      sx={{
        '& .swiper-slide': {
          width: '100%',
          opacity: '0.6',
          paddingBottom: '3rem',
        },
        '& .swiper-slide-active': { opacity: 1 },
        '& .swiper-pagination-bullet': {
          backgroundColor: 'text.primary',
        },
        '& .swiper-button-next, & .swiper-button-prev': {
          color: 'text.primary',
          '&::after': {
            fontSize: { xs: '1rem', md: '2rem' },
          },
        },
        '& .swiper': {
          paddingX: { xs: '1rem', md: '4rem' },
        },
      }}
    >
      <Swiper
        direction='horizontal'
        spaceBetween={10}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Navigation, Pagination, Scrollbar]}
        mousewheel={true}
        loop={true}
        style={{ width: '100%', height: 'max-content', gap: '1rem' }}
      >
        {children}
      </Swiper>
    </Box>
  )
}

export default NavigationSwiper
