import '../styles/globals.css'

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
import 'animate.css/animate.min.css';

import { PassContextProvider } from '../contexts/PassContext';

export default function App({ Component, pageProps }) {
  return (
    <PassContextProvider>
      <Component {...pageProps} />
    </PassContextProvider>
  )
}
