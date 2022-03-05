import '../styles/globals.css'
import ResponsiveAppBar from '../components/responsiveNavBar'
import { Container } from '@mui/material'
import Footer from '../components/footer'
function MyApp({ Component, pageProps }) {
  return <div>
    <ResponsiveAppBar />
    <Component {...pageProps} />
    <Footer/>
    </div>
}

export default MyApp
