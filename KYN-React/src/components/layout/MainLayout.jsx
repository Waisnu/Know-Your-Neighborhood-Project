import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navigation/Navbar";

const MainLayout = (props) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen ">
      <Navbar />
      <div className="flex justify-center px-6 ">
        <main className="xl:max-w-[1580px] opacity-90 w-full text-primary relative z-10">
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
