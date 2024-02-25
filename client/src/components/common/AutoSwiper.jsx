import { Box } from '@mui/material'
import { Swiper } from 'swiper/react'

const swiperStyle = {
  width: '100%',
  height: 'max-content',
}

const boxStyle = {
  '& .swiper-slide': {
    width: {
      xs: '50%',
      sm: '35%',
      md: '25%',
      lg: '20.5%',
    },
  },
}

const AutoSwiper = ({ children }) => {
  return (
    <Box sx={boxStyle}>
      <Swiper
        style={swiperStyle}
        slidesPerView='auto'
        grabCursor={true}
        loop={true}
        spaceBetween={10}
        scrollbar={{ draggable: true, hide: true }}
      >
        {children}
      </Swiper>
    </Box>
  )
}

export default AutoSwiper
