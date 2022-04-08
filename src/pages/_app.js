import '../styles/globals.css';
import 'boxicons/css/boxicons.css';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
