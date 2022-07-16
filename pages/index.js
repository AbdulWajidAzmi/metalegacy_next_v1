import { useState, useEffect } from "react";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs";
import Hero from "../components/Home/Hero";
import Testimonial from "../components/Home/Testimonial";
import Layout from "../components/layout/Layout";
import OurServices from "../components/Services/OurServices";

import Container from "../components/Projects/Container";
import styles from "../components/Projects/styles.module.css";
import styles2 from "../components/home.module.css"
import project1 from "../assets/imgs/projects/prj1.webp";
import project2 from "../assets/imgs/projects/prj2.webp";
import project3 from "../assets/imgs/projects/prj3.webp";
import project4 from "../assets/imgs/projects/prj4.webp";
import ProjectCard from "../components/Projects/ProjectCard";

import gsap from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import barringtonThumbnail from '../assets/imgs/projects/barrington/thumbnail.jpg';
import gammaVrThumbnail from '../assets/imgs/projects/gamma-vr/thumbnail.jpg';
import khansortiumThumbnail from '../assets/imgs/projects/khansortium/thumbnail.jpg';
import wholeCellThumbnail from '../assets/imgs/projects/wholecell/thumbnail.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [projects, setProjects] = useState(
    [
  
      {
        title: "Barrington Crescent Cricket Club",
       id: "barrington-crescent-cricket-club",
        category: "full-stack-development",
        categoryTitle: "Front End Development",
        thumbnail_image: barringtonThumbnail,
        portfolio_images: [],
      },
      {
        title: "Gamma Vr",
        id: "gamma-vr",
        category: "full-stack-development",
        categoryTitle: "Front End Development",
        thumbnail_image: gammaVrThumbnail,
        portfolio_images: [],
      },
      {
        title: "Khansortium",
        id: "khansortium",
        category: "front-end-development",
        categoryTitle: "Front End Development",
        thumbnail_image: khansortiumThumbnail,
        portfolio_images: [],
      },
      {
        title: "Whole Cell Accessories",
        id: "whole-cell",
        category: "full-stack-development",
        categoryTitle: "Front End Development",
        thumbnail_image: wholeCellThumbnail,
        portfolio_images: [],
      },
    ],
    []
  );
  useEffect(() => {
    gsap.utils.toArray("." + styles.Project_Card).forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top center",
        onEnter: () => el.classList.add(styles.active),
      });
    });

    let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.2 } });
    tl.to(".firstLayer", { y: "-100%", duration: 1, ease: "linear" })

      .to(["nav ul li"], { opacity: 1, stagger: 0.1 })
      .to("." + styles2.Projects_Container + " h1 > span", {
        y: 0,
        duration: 0.5,
      });
  }, [projects]);

  return (
    <>
      <Layout>
        <Hero />
        <OurServices mainHeading={"Our Services"} forHome />
        <Testimonial />

        <div className={styles.Projects}>
          <div className={styles2.Projects_Container}>
            <h1 className={"heading   text-animation"}>
              <span>Our Projects</span>
            </h1>
            <div className={styles.Projects_Cards_Container}>
              {projects.map((project, index) => {
                return <ProjectCard key={index} project={project} />;
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
