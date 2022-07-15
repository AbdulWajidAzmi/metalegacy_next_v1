import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/layout/Layout";
import ButtonBottomNavigators from "../../components/navigators/ButtonBottomNavigators";
import { useRouter } from "next/router";

export default function Home({}) {
  const router = useRouter();
  let currentSlug = router.query;

  const [allServices, set_allServices] = useState([
    {
      slug: "front-end",
      heading: ["front end", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Front End" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
    {
      slug: "back-end",
      heading: ["back end", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Back End" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
    {
      slug: "wordpress",
      heading: ["wordpress", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Wordpress" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
    {
      slug: "full-stack",
      heading: ["Full Stack", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Full Stack" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
    {
      slug: "ecommerce",
      heading: ["Ecommerce Website", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Ecommerce Website" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
    {
      slug: "graphics-designing",
      heading: ["Graphics Designing", "development"],
      subHeading: ["if you can", " think it", " web it"],
      btn1: { text: "Our Projects" },
      btn2: { text: "Hire Experts" },
      bottomNavigatorData: [
        { text: "Graphics Designing" + " Projects", link: "/projects/" + "01" },
        { text: "Why Us", link: "/about-us" },
        { text: "More Services", link: "/services" },
      ],
    },
  ]);

  const [bannerContent, setBannerContent] = useState({});

  useEffect(() => {
    setBannerContent(() => {
      let myObj = {};
      allServices.map((service) => {
        if (service.slug === currentSlug.servicesid) myObj = { ...service };
      });
      return {
        ...myObj,
      };
    });
  }, []);

  return (
    <>
      <Layout>
        {bannerContent.heading && bannerContent.heading[0] && (
          <Banner
            bannerContent={bannerContent}
            bottomNavigators={bannerContent.bottomNavigatorData}
          />
        )}
      </Layout>
    </>
  );
}
