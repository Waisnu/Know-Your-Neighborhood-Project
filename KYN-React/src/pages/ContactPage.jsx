import React from "react";

import LayoutFull from "../components/layout/LayoutFull";

const ContactPage = () => {
  return (
    <LayoutFull>
      <section
        className="min-h-[20vh] w-full bg-cover bg-center relative flex justify-center px-5
    after:absolute after:content-[''] after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-gradient-to-t
    after:from-[#0000004d] after:to-[#00000033]"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1616113364365-b6013f3dad25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)` }}
      >
        <div className="max-w-[1280px] text-white w-full relative z-10">
          <div className="flex justify-center items-center pt-20">
            <h2 className="font-inter font-bold text-5xl text-slate-100 drop-shadow-lg text-center">
              Contact Us
            </h2>
          </div>
        </div>
      </section>
      <section className="flex justify-center text-slate-200 px-6 mt-8">
        <div className="max-w-[1280px] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
            <form className="flex flex-col space-y-5 p-10 border-primary rounded-lg  bg bg-zinc-900">
              <h2 className="font-medium text-xl ml-1">Concerns</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="px-3 py-2 rounded"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="px-3 py-2 rounded"
              />
              <textarea
                name="message"
                placeholder="Topic"
                className="px-3 py-2 rounded"
              />
              <button type="submit" className=" btn btn-accent mt-3 rounded py-3">
                Submit
              </button>
            </form>
            <div className="flex flex-col space-y-5 p-5 border-primary shadow text-lg bg-zinc-900">
              <div className="text-center space-y-2">
                <i className="fa-sharp fa-solid fa-location-dot text-4xl" />
                <p>Philippines, Cebu</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-regular fa-envelope text-4xl" />
                <p>lithan-KYN@gmail.com</p>
              </div>
              <div className="text-center space-y-2">
                <i className="fa-solid fa-phone text-4xl" />
                <p>+69696969696, 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutFull>
  );
};

export default ContactPage;
