import { Typography, useTheme } from '@mui/material'

const Logo = () => {
  const theme = useTheme()

  return (
    <Typography fontWeight='700' fontSize='1.75rem'>
      Ansh <span style={{ color: theme.palette.primary.main, textDecoration: 'underline' }}>Flix</span>
    </Typography>
  )
}

export default Logo
