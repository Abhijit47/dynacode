import { Route, Routes } from 'react-router-dom';
import AboutPage from './Page/About';
import BlogPage from './Page/Blog';
import ContactPage from './Page/Contact';
import FaqPage from './Page/Faq';
import HomePage from './Page/Home';
import PageNotFound from './Page/NotFoundPage/NotFound';
import PortfolioPage from './Page/Portfolio';
import SinglePortfolioPage from './Page/PortfolioDetail';
import PricingPage from './Page/Pricing';
import ServicePage from './Page/Service';
import SingleServicePage from './Page/ServiceDetail';
import SinglePostPage from './Page/SinglePost';
import TeamPage from './Page/Team';
import TestimonialPage from './Page/Testimonial';

function AppRouters() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='services' element={<ServicePage />} />
      <Route path='service-detail' element={<SingleServicePage />} />
      <Route path='portfolio' element={<PortfolioPage />} />
      <Route path='portfolio-detail' element={<SinglePortfolioPage />} />
      <Route path='pricing' element={<PricingPage />} />
      <Route path='team' element={<TeamPage />} />
      <Route path='testimonial' element={<TestimonialPage />} />
      <Route path='faq' element={<FaqPage />} />
      <Route path='blog' element={<BlogPage />} />
      <Route path='single-post' element={<SinglePostPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='404-page' element={<PageNotFound />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRouters;
