import type {NextPage} from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";

const Home: NextPage = () => {
    return (
        <div
            className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0'>
            <Head>
                <title>Hassoun&apos;a Portfolio</title>
            </Head>
            <Header/>
            <section id='hero' className='snap-center'>
                <Hero/>
            </section>
            <section id='about' className='snap-center'>
                <About/>
            </section>
            <section id='experience' className='snap-center'>
                <WorkExperience/>
            </section>
            <section id='skills' className='snap-center'>
                <Skills/>
            </section>
            <section id='projects' className='snap-center'>
                <Projects/>
            </section>
            <section id='contact' className='snap-center'>
                <ContactMe/>
            </section>
        </div>
    )
}

export default Home
