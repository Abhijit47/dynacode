import AboutSection from '../../Components/About/about';
import AchievementSection from '../../Components/Achievement';
import BannerInnerSection from '../../Components/Banner/inner';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import PartnersipSection from '../../Components/Partnership';
import ProcessSection from '../../Components/ProcessStep';
import TeamSection from '../../Components/Team';
import TestimonialSection from '../../Components/Testimonial/TestimonialSection';

const AboutPage = () => {
  return (
    <>
      <HeadTitle
        title='About Us - DynaCode - Web Development | SEO | Digital Marketing Agency | Graphic
      Design'
      />
      <BannerInnerSection title='About Us' currentPage='About Us' />
      <PartnersipSection />
      <AboutSection />
      <AchievementSection />
      <TeamSection />
      <WhyChooseUsSection />
      <CtaSection />
      <ProcessSection />
      <TestimonialSection />
    </>
  );
};

export default AboutPage;
