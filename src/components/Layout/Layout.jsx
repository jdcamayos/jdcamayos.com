import { HomeProvider } from '../../context/HomeContext'
import Header from '../Home/Header'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<HomeProvider>
				<Header />
				{children}
				<Footer />
			</HomeProvider>
		</>
	)
}
