import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AboutSnippets from '../components/home/AboutSnippets';
import WhyChooseUs from '../components/home/WhyChooseUs';
import OurOtherResources from '../components/home/OurOtherResources';
import CountersWidget from '../components/home/CountersWidget';
import SummerTrainingSection from '../components/home/SummerTrainingSection';
import ScrollingUpdates from '../components/home/ScrollingUpdates';
import CoursesOverview from '../components/home/CoursesOverview';
import LearnByTechnology from '../components/home/LearnByTechnology';
import CertificationDetails from '../components/home/CertificationDetails';
import TopPerformers from '../components/home/TopPerformers';
import Testimonials from '../components/home/Testimonials';
import ScientistQuotes from '../components/home/ScientistQuotes';
import BooksSection from '../components/home/BooksSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsSection from '../components/home/ProjectsSection';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <AboutSnippets />
            <WhyChooseUs />
            <OurOtherResources />
            <CountersWidget />
            <SummerTrainingSection />
            <ScrollingUpdates />
            <CoursesOverview />
            <LearnByTechnology />
            <BooksSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationDetails />
            <TopPerformers />
            <Testimonials />
            <ScientistQuotes />
        </>
    );
};

export default Home;
