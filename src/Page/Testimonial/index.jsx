import BannerInnerSection from '../../Components/Banner/inner';
import HeadTitle from '../../Components/Head/HeadTitle';
import TestimonialPageSection from '../../Components/Testimonial/TestimonialPage';

const TestimonialPage = () => {
  return (
    <>
      <HeadTitle title='Testimonials - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='Testimonial' currentPage='Testimonial' />
      <TestimonialPageSection />
    </>
  );
};

export default TestimonialPage;
