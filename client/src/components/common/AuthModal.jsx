import { Box, Modal } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalOpen } from '../../redux/features/authModalSlice'
import Logo from './Logo'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

const ACTION_STATE = {
  SIGNIN: 'signin',
  SIGNUP: 'signup',
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '600px',
  padding: 4,
  outline: 'none',
}

const AuthModal = () => {
  const { authModalOpen } = useSelector(state => state.authModal)
  const dispatch = useDispatch()
  const [action, setAction] = useState(ACTION_STATE.SIGNIN)

  useEffect(() => {
    if (authModalOpen) setAction(ACTION_STATE.SIGNIN)
  }, [authModalOpen])

  const handleClose = () => dispatch(setAuthModalOpen(false))
  const switchAuthState = state => setAction(state)

  return (
    <Modal aria-labelledby='Auth Modal' aria-describedby='Auth Modal' open={authModalOpen} onClose={handleClose}>
      <Box sx={modalStyle}>
        <Box
          sx={{
            padding: 4,
            boxShadow: 24,
            backgroundColor: 'background.paper',
            borderRadius: '2rem',
          }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
            <Logo />
          </Box>
          {action === ACTION_STATE.SIGNIN && (
            <SigninForm switchAuthState={() => switchAuthState(ACTION_STATE.SIGNUP)} />
          )}
          {action === ACTION_STATE.SIGNUP && (
            <SignupForm switchAuthState={() => switchAuthState(ACTION_STATE.SIGNIN)} />
          )}
        </Box>
      </Box>
    </Modal>
  )
}

export default AuthModal
