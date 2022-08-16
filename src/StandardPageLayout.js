import React, {useEffect, useContext} from 'react'
import Footer from './components/molecules/Nav/Footer';
import Header from './components/molecules/Nav/Header';
import { AppContext } from './contexts/AppContext'

const StandardPageLayout = ({children}) => {
  const { dispatch } = useContext(AppContext)
  useEffect( () => {
    dispatch({type: 'CHECK_AUTH'})
  }, [])
  return ( 
    <div>
      <Header />
      <div className='flex flex-col min-h-screen'>
        {children}
      </div>
      <Footer />
    </div>
   );
}
 
export default StandardPageLayout;