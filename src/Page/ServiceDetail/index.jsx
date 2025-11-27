import AchievementSection from '../../Components/Achievement';
import BannerInnerSection from '../../Components/Banner/inner';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import SingleServiceSection from '../../Components/Service/SingleService';
import TeamSection from '../../Components/Team';

const SingleServicePage = () => {
  return (
    <>
      <HeadTitle title='Service Detail - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='On-Page SEO' currentPage='On page SEO' />
      <SingleServiceSection />
      <AchievementSection />
      <TeamSection />
      <WhyChooseUsSection />
    </>
  );
};

export default SingleServicePage;
