import AchievementSection from '../../Components/Achievement';
import BannerInnerSection from '../../Components/Banner/inner';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import PartnersipSection from '../../Components/Partnership';
import ProcessSection from '../../Components/ProcessStep';
import ServiceSection from '../../Components/Service';
import TeamSection from '../../Components/Team';
import TestimonialSection from '../../Components/Testimonial/TestimonialSection';

const ServicePage = () => {
  return (
    <>
      <HeadTitle title='Services - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='Services' currentPage='Services' />
      <PartnersipSection />
      <ServiceSection />
      <AchievementSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <CtaSection />
      <TeamSection />
      <TestimonialSection />
    </>
  );
};

export default ServicePage;
