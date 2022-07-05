import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
import Hero from "../../components/AboutUs/Hero";
import Layout from "../../components/layout/Layout"; 
import styles from "../../components/AboutUs/about-us.module.css";
import AboutCompany from "../../components/AboutUs/AboutCompany";
import GetAQoute from "../../components/GetAQuote/GetAQoute";
import WhyChooseUs from "../../components/AboutUs/WhyChooseUs";

function ContactUs() {
  return (
    <Layout>
        <Hero />
        <AboutCompany />
        <GetAQoute />
        <WhyChooseUs />
    </Layout>
  );
}

export default ContactUs;
