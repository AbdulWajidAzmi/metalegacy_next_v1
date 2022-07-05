import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
import Hero from "../../components/ContactUs/Hero";
import Layout from "../../components/layout/Layout"; 

function ContactUs() {
  return (
    <Layout>
        <Hero />
        <ContactForm />
    </Layout>
  );
}

export default ContactUs;
