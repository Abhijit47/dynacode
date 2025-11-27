import BannerInnerSection from '../../Components/Banner/inner';
import CtaSection from '../../Components/CallToAction';
import WhyChooseUsSection from '../../Components/ChooseUs';
import HeadTitle from '../../Components/Head/HeadTitle';
import ProcessSection from '../../Components/ProcessStep';
import TeamSectionExtend from '../../Components/Team/extend';

const TeamPage = () => {
  return (
    <>
      <HeadTitle title='Team - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection title='Team' currentPage='Team' />
      <TeamSectionExtend />
      <CtaSection />
      <WhyChooseUsSection />
      <ProcessSection />
    </>
  );
};

export default TeamPage;
