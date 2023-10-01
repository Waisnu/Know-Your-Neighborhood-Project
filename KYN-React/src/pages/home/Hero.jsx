import React from "react";
// import { hero } from "../../assets";
import SearchForm from "../../components/form/SearchForm";

import { Link } from "react-router-dom";


const Hero = () => {
  
  return (
   <section className="hero flex items-center justify-center min-h-screen">
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md  -mt-5">
      <h1 className="mb-5 text-5xl  font-extrabold   text-accent -mt-5">Know Your Neighborhood</h1>
      <SearchForm />
      <p className="mb-5 text-white mt-96">
      Meet Neighborhood Navigator, your local discovery sidekick! Uncover hidden gems, events, and more with a simple click. Be the hero of your community, exploring your neighborhood's charm effortlessly!





      </p>
      
      <Link to="/login" className="btn btn-accent">
            Add Store
          </Link>
    </div>
  </div>
  
</section>

  );
};

export default Hero;
