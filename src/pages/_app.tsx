import {AppProps} from 'next/app'
import Page from '../components/Page';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../public/css/index.css';

function App({Component, pageProps}: AppProps) {
    return <Page>
        <Component {...pageProps} />
    </Page>
}

export default App