import BannerInnerSection from '../../Components/Banner/inner';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import PortfolioSection from '../../Components/Portfolio';
import TeamSection from '../../Components/Team';
import TestimonialSection from '../../Components/Testimonial/TestimonialSection';

const PortfolioPage = () => {
  return (
    <>
      <HeadTitle title='Portfolio - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='Portfolio' currentPage='Portfolio' />
      <PortfolioSection />
      <CtaSection />
      <WhyChooseUsSection />
      <TeamSection />
      <TestimonialSection />
    </>
  );
};

export default PortfolioPage;
