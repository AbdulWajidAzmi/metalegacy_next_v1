import gsap from "gsap";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import khansortium_banner from "../../assets/imgs/portfolios/khansortium/khansortium_banner.jpg";
import khansortium_mob_banner from "../../assets/imgs/projects/prj1.webp";
import khansortium_portfolio_img1 from "../../assets/imgs/projects/prj-h-5.jpg";
import khansortium_portfolio_img11 from "../../assets/imgs/projects/prj-h-6.jpg";
import khansortium_portfolio_img2 from "../../assets/imgs/projects/prj-h-7.jpg";
import khansortium_portfolio_img3 from "../../assets/imgs/projects/prj-h-8.jpg";
import khansortium_portfolio_img4 from "../../assets/imgs/projects/prj-h-9.jpg";
import khansortium_portfolio_img5 from "../../assets/imgs/projects/prj-h-1.jpg";

import mob_project1 from "../../assets/imgs/projects/prj-v-1.png";
import mob_project2 from "../../assets/imgs/projects/prj-v-2.png";
import mob_project3 from "../../assets/imgs/projects/prj-v-3.png";
import mob_project4 from "../../assets/imgs/projects/prj-v-4.png";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import portfolio from "../../assets/imgs/projects/prj1.webp";
import portrait from "../../assets/imgs/projects/prj1.webp";
import styles from "../../components/Projects/styles.module.css";
import { useRouter } from "next/router";

import barringtonBanner from "../../assets/imgs/projects/barrington/banner.jpg";
import gammaVrBanner from "../../assets/imgs/projects/gamma-vr/banner.jpg";
import khansortiumBanner from "../../assets/imgs/projects/khansortium/banner.jpg";
import wholeCellBanner from "../../assets/imgs/projects/wholecell/banner.jpg";

import barringtonImg1 from "../../assets/imgs/projects/barrington/LOGO.jpg";
import barringtonImg2 from "../../assets/imgs/projects/barrington/SOCIAL MEDIA.jpg";
import barringtonImg3 from "../../assets/imgs/projects/barrington/WEBSITE.jpg";

import gammaVronImg1 from "../../assets/imgs/projects/gamma-vr/Logo.jpg";
import gammaVronImg2 from "../../assets/imgs/projects/gamma-vr/SOCIAL MEDIA.jpg";
import gammaVronImg3 from "../../assets/imgs/projects/gamma-vr/01.jpg";


import khansortiumImg1 from "../../assets/imgs/projects/khansortium/Branding.jpg";
import khansortiumImg2 from "../../assets/imgs/projects/khansortium/Website.jpg";
import khansortiumImg3 from "../../assets/imgs/projects/khansortium/01.jpg";
import khansortiumImg4 from "../../assets/imgs/projects/khansortium/02.jpg";



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

  return (
    <Layout>
      <div className={styles.Project_Details}>
        <div className={styles.project_details_first_section}>
          <div className={styles.project_details_first_section_container}>
            <h1 className="heading text-animation">
              <span>Khansortium</span>
            </h1>
            <h4 className="text-animation">
              <span>Website Designing</span>
            </h4>
            <div className={`${styles.project_category} text-animation`}>
              <span>Group of Company</span>
            </div>
          </div>
          <div className={styles.project_banner} id="banner_img">
            <a href="#banner_img">
              <span
                className={
                  styles.scroll_down_btn + " " + styles.active
                } /* onClick={scrollDown} */
              >
                <svg
                  width="35"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 330 330"
                  style={{
                    enableBackground: "new 0 0 330 330",
                    transform: "rotate(90deg)",
                  }}
                  xmlSpace="preserve"
                >
                  <path
                    id="XMLID_27_"
                    d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </span>
            </a>
            <a href="">
              <span
                className={styles.visit_site_btn} /* onClick={scrollDown} */
              >
                Visit Site
              </span>
            </a>
            <div className="cover-img-div">
              <Image src={khansortiumBanner}  alt="baad me" />
            </div>
          </div>
        </div>
        <div className={styles.portfolio_images}>
          <div className={styles.portfolio_image}>
            <Image alt="baad me" src={khansortiumImg1} />
          </div>

          <div className={styles.portfolio_image}>
            <Image alt="baad me" src={khansortiumImg2} />
          </div>

          <div className={styles.portfolio_image}>
            <div className={`${styles.portfolio_half} displaySmallNone`}>
              <Image alt="baad me" src={khansortiumImg3} />
            </div>
            <div className={styles.portfolio_half}>
              <Image alt="baad me" src={khansortiumImg4} />
            </div>
          </div>

          <div className={styles.portfolio_image}>
            {/* <Image alt="baad me" src={gammaVronImg3} /> */}
          </div>

          {/* <div className={styles.portfolio_image}></div> */}
          <div className={styles.portfolio_image}>
            {/* <Image alt="baad me" src={khansortium_portfolio_img3} /> */}
          </div>

          <div className={styles.portfolio_image}>
            {/* <Image alt="baad me" src={khansortium_portfolio_img1} /> */}
          </div>

          <div className={styles.portfolio_image}>
            <div className={styles.portfolio_half}>
              {/* <Image alt="baad me" src={mob_project2} /> */}
            </div>
            <div className={styles.portfolio_half}>
              {/* <Image alt="baad me" src={mob_project2} /> */}
            </div>
          </div>

          <div className={styles.portfolio_image}>
            {/* <Image alt="baad me" src={khansortium_portfolio_img2} /> */}
          </div>

          <div className={styles.portfolio_image}>
            {/* <Image alt="baad me" src={khansortium_portfolio_img3} /> */}
          </div>

          <div className={styles.portfolio_image}>
            <div className={styles.portfolio_half}>
              {/* <Image alt="baad me" src={mob_project3} /> */}
            </div>
            <div className="portfolio_half displaySmallNone">
              {/* <Image alt="baad me" src={mob_project3} /> */}
            </div>
          </div>
        </div>
      </div>

      <div className="firstLayer"></div>
    </Layout>
  );
};
export default ProjectDetail;
