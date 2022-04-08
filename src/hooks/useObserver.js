import { useEffect, useRef, useState } from 'react'

export function useObserver() {
	const containerRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	const callbackFunction = entries => {
		const [entry] = entries
		setIsVisible(entry.isIntersecting)
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, {
			root: null,
			rootMargin: '0px',
			threshold: 0.5,
		})
		if (containerRef.current) observer.observe(containerRef.current)
		return () =>
			containerRef.current && observer.unobserve(containerRef.current)
	}, [containerRef])

	return [containerRef, isVisible]
}
