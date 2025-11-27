import AboutSection from '../../Components/About/about';
import AchievementSection from '../../Components/Achievement';
import BannerHome from '../../Components/Banner';
import BlogSection from '../../Components/Blog';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import PartnersipSection from '../../Components/Partnership';
import PortfolioSection from '../../Components/Portfolio';
import ProcessSection from '../../Components/ProcessStep';
import ServiceSection from '../../Components/Service';
import TestimonialSection from '../../Components/Testimonial/TestimonialSection';
import ModalVideoSection from '../../Components/Video/VideoPlayer';

const HomePage = () => {
  return (
    <>
      <BannerHome />
      <ModalVideoSection />
      <PartnersipSection />
      <AboutSection />
      <ServiceSection />
      <AchievementSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <CtaSection />
      <PortfolioSection />
      <TestimonialSection />
      <BlogSection />
    </>
  );
};

export default HomePage;
