import gsap from "gsap";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import khansortium_banner from "../../assets/imgs/portfolios/khansortium/khansortium_banner.jpg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../components/Projects/styles.module.css";
import barringtonBanner from "../../assets/imgs/projects/barrington/banner.jpg";
import barringtonImg1 from "../../assets/imgs/projects/barrington/LOGO.jpg";
import barringtonImg2 from "../../assets/imgs/projects/barrington/SOCIAL MEDIA.jpg";
import barringtonImg3 from "../../assets/imgs/projects/barrington/WEBSITE.jpg";

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
          {/* styled balls start */}
          <svg
            className={styles.blob + " " + styles.blob1}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#D0E2FF"
              d="M23.9,-19.4C31.1,-1.3,37.3,11.9,33.1,22.9C28.9,33.9,14.5,42.7,-3,44.4C-20.6,46.2,-41.1,40.9,-52.3,25.9C-63.5,10.8,-65.3,-14,-55,-33.9C-44.7,-53.8,-22.4,-68.8,-7,-64.7C8.3,-60.7,16.7,-37.6,23.9,-19.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className={styles.blob + " " + styles.blob2}
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#D0E2FF"
              d="M31.3,-22.2C35.3,-11.2,29.5,1.2,22.7,16.8C15.8,32.3,7.9,50.9,-1.9,52.1C-11.8,53.2,-23.5,36.8,-36.3,17.8C-49.1,-1.2,-62.9,-22.8,-57.1,-34.8C-51.2,-46.8,-25.6,-49.3,-6,-45.9C13.7,-42.4,27.4,-33.1,31.3,-22.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className={styles.project_details_first_section_container}>
            <h1 className="heading text-animation">
              <span>Barrington Crescent Cricket Club</span>
            </h1>
            <h4 className="text-animation">
              <span>Website Designing</span>
            </h4>
            <div className={`${styles.project_category} text-animation`}>
              <span>Cricket</span>
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
              <Image src={barringtonBanner} alt="baad me" />
            </div>
          </div>
        </div>
        <div className={styles.portfolio_images}>
          <div className={styles.portfolio_image}>
            <Image alt="baad me" src={barringtonImg1} />
          </div>

          <div className={styles.portfolio_image}>
            <Image alt="baad me" src={barringtonImg2} />
          </div>

          <div className={styles.portfolio_image}>
            <Image alt="baad me" src={barringtonImg3} />
          </div>
        </div>
      </div>

      <div className="firstLayer"></div>
    </Layout>
  );
};
export default ProjectDetail;
