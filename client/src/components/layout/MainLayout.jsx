import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import favoriteApi from '../../api/modules/favorite.api'
import userApi from '../../api/modules/user.api'
import { setListFavorites, setUser } from '../../redux/features/userSlice'
import AuthModal from '../common/AuthModal'
import Footer from '../common/Footer'
import GlobalLoading from '../common/GlobalLoading'
import Topbar from '../common/Topbar'

const MainLayout = () => {
  const dispatch = useDispatch()

  const { user } = useSelector(state => state.user)

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.getInfo()

      if (response) dispatch(setUser(response))
      if (err) dispatch(setUser(null))
    }

    authUser()
  }, [dispatch])

  useEffect(() => {
    const getFavorites = async () => {
      const { response, err } = await favoriteApi.getList()

      if (response) dispatch(setListFavorites(response))
      if (err) toast.error(err.message)
    }

    if (user) getFavorites()
    if (!user) dispatch(setListFavorites([]))
  }, [user, dispatch])

  return (
    <>
      {/* BEGIN: global loading */}
      <GlobalLoading />
      {/* END: global loading */}

      {/* BEGIN: login modal */}
      <AuthModal />
      {/* END: login modal */}

      <div className='flex min-h-screen flex-col'>
        {/* BEGIN: header */}
        <Topbar />
        {/* END: header */}

        {/* BEGIN: main */}
        <main className='flex-grow overflow-hidden'>
          <Outlet />
        </main>
        {/* END: main */}
      </div>

      {/* BEGIN: footer */}
      <Footer />
      {/* END: footer */}
    </>
  )
}

export default MainLayout
