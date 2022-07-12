import {AppProps} from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../public/css/index.css';

function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default App