import Head from 'next/head'
// Sections
import HomeSection from '../components/Home/HomeSection'
import AboutSection from '../components/Home/AboutSection'
import SkillsSection from '../components/Home/SkillsSection'
import ServicesSection from '../components/Home/ServicesSection'
import WorkSection from '../components/Home/WorkSection'
import TestimonialSection from '../components/Home/TestimonialSection'
import ContactSection from '../components/Home/ContactSection'
import { HomeProvider } from '../context/HomeContext'

export default function Home() {
	return (
		<>
			<Head>
				<title>Juan Camayo - Fullstack Developer</title>
			</Head>
			{/* <Header /> */}

			<main className='main'>
				{/* HOME  */}
				<HomeSection />
				{/* ABOUT  */}
				<AboutSection />
				{/* SKILLS  */}
				<SkillsSection />
				{/* SERVICES  */}
				{/* <ServicesSection /> */}
				{/* WORK  */}
				{/* <WorkSection /> */}
				{/* TESTIMONIALS  */}
				{/* <TestimonialSection /> */}
				{/* Contact */}
				<ContactSection />
			</main>
		</>
	)
}
