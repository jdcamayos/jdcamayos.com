import { createContext, useContext, useState } from 'react'

const homeContext = createContext()

export const useHomeContext = () => useContext(homeContext)

export const HomeProvider = ({ children }) => {
	const [homeState, setHomeState] = useState({
    activeSection: null,
  })
	return (
		<homeContext.Provider value={{ homeState, setHomeState }}>
			{children}
		</homeContext.Provider>
	)
}
