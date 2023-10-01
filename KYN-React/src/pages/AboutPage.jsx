import React from "react";

import LayoutFull from "../components/layout/LayoutFull";

const AboutPage = () => {
  return (
    <LayoutFull>
      <section className="min-h-[20vh] w-full bg-cover bg-center relative flex justify-center px-6 after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t after:from-[#0000004d] after:to-[#00000033]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544164559-234221196a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80)' }}>
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-slate-100 drop-shadow-lg text-center">
              About Us
              
            </h2>
            
          </div>
          
        </div>
      </section>
      <div className="flex justify-center items-center px-5 mt-5">
        <h1 className="font-poppins text-accent">
          Rating
        </h1>
      </div>
      <div className="flex justify-center items-center px-5 py-4">
      <div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" />
  <input type="radio" name="rating-1" className="mask mask-star" checked />
  <input type="radio" name="rating-1" className="mask mask-star" />
</div>
      </div>
      <section className="flex justify-center items-center">
      <div className="stats shadow">
      <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
      </div>
    </section>
  
      <section className="flex justify-center items-center text-center -mb-10 px-5 py-10">
        
        <div className="container mx-auto">
         
            
            <div className="order-1 md:order-2 text-gray-600">
              <h3 className="text-3xl  text-accent text-color1 mb-4">
                Our Mission
              </h3>
              <p className="mb-4">
                Welcome to "Know Your Neighborhood"! We are a team of locals who are dedicated to helping people connect with and appreciate their neighborhoods. Every neighborhood has its own distinct character, which is why we have created a platform that embraces the uniqueness of the places we call home. From local businesses and events to community resources and updates, our aim is to be the ultimate destination for all things local.
              </p>
              <p className="mb-4">
                However, we go beyond being just an information hub. We strongly believe in the power of community interaction, which is why we offer features like discussion boards and user-generated content. Our goal is to make "Know Your Neighborhood" a space where neighbors can engage and forge connections. Whether you're new to the area or a long-time resident, we invite you to join us in celebrating the aspects that make our community extraordinary. Thank you for choosing "Know Your Neighborhood" as your trusted source for all things related to your locality.
              </p>
            </div>
          </div>
  
      </section>
  

  
      <section className="flex justify-center items-center bg-slate min-h-screen px-6 py-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-600">
              <h3 className="text-3xl font text-accent mb-4">
                Our Values
              </h3>
              <p className="mb-4">
              
The Know Your Neighborhood program embodies a commitment to fostering community awareness and connection. Rooted in our web application, this initiative aims to empower individuals with a deeper understanding of their localities. Through our platform, users gain access to comprehensive insights into the dynamics that shape their neighborhoods. Our program values transparency, enabling users to explore key metrics such as demographic composition, crime rates, educational resources, and local amenities.
              </p>
              <p className="mb-4">
              By promoting knowledge about their surroundings, we believe in equipping residents with the information needed to make informed decisions, engage in meaningful discussions, and collaborate on initiatives that enhance the quality of life in their communities. Know Your Neighborhood stands as a testament to the belief that informed citizens lay the foundation for vibrant and thriving neighborhoods.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1482859602406-7659b00979fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="about_us"
              className="order-1 md:order-2 rounded-md shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center text-center -mb-10 px-5 py-10">
  <div className="container mx-auto">
    <div className="order-1 md:order-2 text-gray-600">
      <h3 className="text-3xl text-white text-color1 mb-4">
        Terms & Condition
      </h3>
      <p className="mb-4">
        By using [Your Web Application Name], you agree to comply with these terms and conditions. If you do not agree, please refrain from using the website.
        <br />
        <br />
        <span className="text-white">Cookies</span>
        <br />
        Our website uses cookies as outlined in the [Your Web Application Name] Privacy Policy. By using the website, you consent to the use of cookies.
        <br />
        <br />
        <span className="text-white">Intellectual Property</span>
        <br />
        All intellectual property rights for [Your Web Application Name] content belong to us. You may access and use the material for personal purposes, within the terms of these conditions.
        <br />
        <br />
        <span className="text-white">Restrictions</span>
        <br />
        You must not:
        <br />
        - Republish, sell, rent, or copy our content.
        <br />
        - Use our content in a way that implies endorsement or approval.
        <br />
        - Link to our website if your content is offensive, misleading, or infringes third-party rights.
        <br />
        <br />
        <span className="text-white">Liability</span>
        <br />
        We are not responsible for content on your site linked to ours. You agree to defend us against claims arising from such links. We may request the removal of links at our discretion.
        <br />
        <br />
        <span className="text-white">Disclaimer</span>
        <br />
        We provide our website and content "as is," excluding certain liabilities not permitted by law. This disclaimer does not affect any legal rights that cannot be excluded.
      </p>
    </div>
  </div>
</section>


    </LayoutFull>
  );
  
};

export default AboutPage;
