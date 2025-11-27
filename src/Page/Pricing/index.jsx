import BannerInnerSection from '../../Components/Banner/inner';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import PricingSection from '../../Components/Pricing';
import ProcessSection from '../../Components/ProcessStep';

const PricingPage = () => {
  return (
    <>
      <HeadTitle title='Pricing Plan - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='Pricing Plan' currentPage='Pricing Plan' />
      <PricingSection />
      <CtaSection />
      <WhyChooseUsSection />
      <ProcessSection />
    </>
  );
};

export default PricingPage;
