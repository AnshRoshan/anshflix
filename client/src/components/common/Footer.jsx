import { Paper, Stack, Button, Box, Typography } from '@mui/material'
import React from 'react'
import Container from './Container'
import Logo from './Logo'
import menuConfigs from '../../configs/menu.configs'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: 'unset', padding: '2rem' }}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          direction={{ xs: 'column', md: 'row ' }}
          sx={{ height: 'max-content' }}
        >
          <Box>
            {menuConfigs.footer.map((item, index) => (
              <a key={index} href={item.path}>
                <Button sx={{ color: 'text.primary', fontWeight: '700' }} variant='text'>
                  {item.display}
                </Button>
              </a>
            ))}
          </Box>
          <a href='http://github.com/anshroshan' target='_blank' rel='noreferrer'>
            <Typography variant='caption' component='div' fontWeight='700' fontSize='1.2rem' sx={{ marginTop: '-5px' }}>
              @anshroshan
            </Typography>
          </a>
        </Stack>
      </Paper>
    </Container>
  )
}

export default Footer
