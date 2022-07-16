import gsap from "gsap";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import khansortium_banner from "../../assets/imgs/portfolios/khansortium/khansortium_banner.jpg";
import portfolio from "../../assets/imgs/projects/prj1.webp";
import portrait from "../../assets/imgs/projects/prj1.webp";
import styles from "../../components/Projects/styles.module.css";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import barringtonBanner from "../../assets/imgs/projects/barrington/banner.jpg";
import gammaVrBanner from "../../assets/imgs/projects/gamma-vr/banner.jpg";
import khansortiumBanner from "../../assets/imgs/projects/khansortium/banner.jpg";
import wholeCellBanner from "../../assets/imgs/projects/wholecell/banner.jpg";

import khansortiumImg1 from "../../assets/imgs/projects/khansortium/Branding.jpg";
import khansortiumImg2 from "../../assets/imgs/projects/khansortium/Website.jpg";
import khansortiumImg3 from "../../assets/imgs/projects/khansortium/01.jpg";
import khansortiumImg4 from "../../assets/imgs/projects/khansortium/02.jpg";

import barringtonImg1 from "../../assets/imgs/projects/barrington/LOGO.jpg";
import barringtonImg2 from "../../assets/imgs/projects/barrington/SOCIAL MEDIA.jpg";
import barringtonImg3 from "../../assets/imgs/projects/barrington/WEBSITE.jpg";

import wholecellImg1 from "../../assets/imgs/projects/wholecell/LOGO.jpg";
import wholecellImg2 from "../../assets/imgs/projects/wholecell/WEBSITE.jpg";
import wholecellImg3 from "../../assets/imgs/projects/wholecell/Social Media.jpg";
import wholecellImg4 from "../../assets/imgs/projects/wholecell/01.jpg";
import wholecellImg5 from "../../assets/imgs/projects/wholecell/02.jpg";

import gammaVronImg1 from "../../assets/imgs/projects/gamma-vr/Logo.jpg";
import gammaVronImg2 from "../../assets/imgs/projects/gamma-vr/SOCIAL MEDIA.jpg";
import gammaVronImg3 from "../../assets/imgs/projects/gamma-vr/01.jpg";
import ProjectDetailsPage from "../../components/Projects/ProjectDetailsPage";

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = ({ slug }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [bannerImg, setBannerImg] = useState(khansortium_banner);
  console.log(slug);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    setBannerImg(() => (isMobile ? khansortium_banner : khansortium_banner));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  useEffect(() => {
    const moveBanner = () => {
      let banner = document.querySelector("." + styles.project_banner);
      let sdb = document.querySelector("." + styles.scroll_down_btn);
      if (window.scrollY > 100) {
        banner?.classList.add(styles.active);
        sdb?.classList.remove(styles.active);
      } else {
        banner?.classList.remove(styles.active);
        sdb?.classList.add(styles.active);
      }
    };
    window.addEventListener("scroll", moveBanner);
    gsap.utils.toArray("." + styles.portfolio_image).forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        onEnter: () => el.classList.add(styles.active),
      });
    });

    let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.2 } });
    tl.to(".firstLayer", { y: "-100%", duration: 1, ease: "linear" })

      .to(["nav ul li"], { opacity: 1, stagger: 0.1 })
      .to(`.${styles.project_details_first_section_container}  h1 > span`, {
        y: 0,
        duration: 0.5,
      })
      .to(`.${styles.project_details_first_section_container} h4 > span`, {
        y: 0,
        duration: 0.5,
      })
      .to(`.${styles.project_category}  > span`, { y: 0 })
      .to(`.${styles.project_category}`, { overflow: "visible" })
      .to(`.${styles.project_banner} > span`, {
        y: "0",
        opacity: 1,
        duration: 0.7,
      })
      .to(`.${styles.project_banner} .${styles.scroll_down_btn}`, {
        scale: "1",
      });
  }, []);
  /*    const scrollDown =()=>{
        window.scrollTo(0,window.innerHeight/1.2)
    } */

  const router = useRouter();
  let currentSlug = router.query;
  // console.log("current",currentSlug);

  const [allProjects, set_allProjects] = useState([
    {
      slug: "barrington-crescent-cricket-club",
      heading: "Barrington Crescent Cricket Club",
      subHeading: "Website Designing",
      category: "Cricket",
      banner: barringtonBanner,
      images: [barringtonImg1, barringtonImg2, barringtonImg3],
    },
    {
      slug: "gamma-vr",
      heading: "Gamma VR",
      subHeading: "Website Designing",
      category: "Gamming",
      banner: gammaVrBanner,
      images: [gammaVronImg1, gammaVronImg2, gammaVronImg3],
    },
    {
      slug: "khansortium",
      heading: "Khansortium",
      subHeading: "Website Designing",
      category: "Group of Company",
      banner: khansortiumBanner,
      images: [
        khansortiumImg1,
        khansortiumImg2,
        khansortiumImg3,
        khansortiumImg4,
      ],
    },
    {
      slug: "whole-cell",
      heading: "Whole Cell Accessories",
      subHeading: "Website Designing",
      category: "Mobile Phones",
      banner: wholeCellBanner,
      images: [
        wholecellImg1,
        wholecellImg2,
        wholecellImg3,
        wholecellImg4,
        wholecellImg5,
      ],
    },
  ]);

  const [bannerContent, setBannerContent] = useState({});

  useEffect(() => {
    setBannerContent(() => {
      let myObj = {};
      allProjects.map((service) => {
        // console.log("map");
        // console.log("currentSlug.servicesid",currentSlug.slug);
        // console.log("service.slug",service.slug);
        if (service.slug === currentSlug.slug) myObj = { ...service };
      });
      return {
        ...myObj,
      };
    });
  }, []);

  console.log("bannerContent", bannerContent);
  return (
    <Layout>
      <ProjectDetailsPage data={bannerContent} />
      <div className="firstLayer"></div>
    </Layout>
  );
};
export default ProjectDetail;

export async function getServerSideProps(ctx) {
  const { slug } = await ctx.query;

  return {
    props: {
      slug,
    },
  };
}
