import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import WhyGoDharma from '../components/WhyGoDharma';
import HowWeWork from '../components/HowWeWork';
import CallToAction from '../components/CallToAction';


import ScrollReveal from "../components/ScrollReveal";

const Home = () => {
  return (
    <div>
      <Hero />

      <ScrollReveal>
        <OurServices />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <WhyGoDharma />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <HowWeWork />
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <CallToAction />
      </ScrollReveal>
    </div>
  );
};

export default Home;
