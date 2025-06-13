import data from '../data/data.json';
import Navbar from '../components/Navbar';

import About from '../components/About';
import Services from '../components/Service';
import Products from '../components/Product';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import BlogGrid from '../components/BlogGrid';
import BlogDetail from '../components/BlogDetail';
import Footer from '../components/Footer';
import Heropage from '@/components/Heropage';
import Success from '@/components/Success';
import Booking from '@/components/Booking';

export default function Home({
  navData,
  heroData,
  aboutData,
  servicesData,
  productsData,
  pricingData,
  teamData,
  testimonialsData,
  blogGrid,
  blogDetail,
  bookingData,
  footerData,
  successData
}) {
  return (
    <>
      <Navbar data={navData} />
      <Heropage data={heroData} />
      <About data={aboutData} />
      <Services data={servicesData} />
      <Success data={successData} />
      <Booking data={bookingData} />
      <Products data={productsData} />
      <Pricing data={pricingData} />   
      <Team data={teamData} />
      <Testimonials data={testimonialsData} />
      <BlogGrid data={blogGrid} />
      <BlogDetail data={blogDetail} />
      <Footer data={footerData} /> 
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      navData: data.navbar || null,
      heroData: data.heroPage || null,
      aboutData: data.about || null,
      servicesData: data.services || null,
      productsData: data.products || null,
      pricingData: data.packages || null,           // ✅ use "packages" from JSON
      teamData: data.team || null,
      testimonialsData: data.testimonials || null,  // ✅ or use "successStories" if needed
      blogGrid: data.blogGridData || null,          // ✅ only if this key exists
      blogDetail: data.blogData || null,            // ✅ CORRECTED: now it's camelCase
      footerData: data.footer || null,
      successData: data.successStories || null,
      bookingData: data.booking || null
    }
  };
}
