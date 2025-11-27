import BannerInnerSection from '../../Components/Banner/inner';
import SinglePostSection from '../../Components/Blog/SinglePost';
import HeadTitle from '../../Components/Head/HeadTitle';

const SinglePostPage = () => {
  return (
    <>
      <HeadTitle title='Single Post - Aspire - SEO & Digital Marketing Agency' />
      <BannerInnerSection
        title='Creating Compelling Content That Convert'
        currentPage='Creating Compelling Content That Convert'
      />
      <SinglePostSection />
    </>
  );
};

export default SinglePostPage;
