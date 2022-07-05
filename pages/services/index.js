import React from "react";
import Layout from "../../components/layout/Layout";
import GetAQoute from "../../components/GetAQuote/GetAQoute";
import AllServices from "../../components/Services/AllServices";
import Hero from "../../components/Services/Hero";
import OurServices from "../../components/Services/OurServices";

export default function Services() {
  return (
    <>
      <Layout>
        <div className="services">
          <Hero />
          {/* <AllServices /> */}
          <OurServices />
          <GetAQoute />

          <div className="firstLayer"></div>
          {/* <Banner  bannerContent={bannerContent} /> */}
          {/* <SideNavigators/> */}
        </div>
      </Layout>
    </>
  );
}
