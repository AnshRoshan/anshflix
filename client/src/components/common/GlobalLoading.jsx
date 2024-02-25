import { Box, CircularProgress, LinearProgress, Paper, Toolbar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const GlobalLoading = () => {
  const progressProps = [{ color: 'success', size: 300 }]

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
  const { globalLoading } = useSelector(state => state.globalLoading)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (globalLoading) {
      setIsLoading(true)
    } else {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [globalLoading])

  return (
    <>
      <Paper
        sx={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: 'none',
          transition: 'all .3s ease',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 999,
        }}
      >
        <Toolbar />
        <LinearProgress />
        {progressProps.map((props, index) => (
          <Box key={index} sx={boxStyle}>
            <CircularProgress color={props.color} variant='indeterminate' size={props.size} />
          </Box>
        ))}
      </Paper>
    </>
  )
}

export default GlobalLoading
