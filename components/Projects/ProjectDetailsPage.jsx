import React from "react";
import styles from '../../components/Projects/styles.module.css'
import Image from 'next/image'
import barringtonBanner from '../../assets/imgs/projects/barrington/banner.jpg';
import khansortiumBanner from "../../assets/imgs/projects/khansortium/banner.jpg";


const ProjectDetailsPage = ({data}) => {
    console.log("data ",data);
    console.log("data ",data);
    // console.log("data.banner.src ",data.banner.src);
    // console.log("data.banner.slug ",data.banner.slug);
  return (
    <div className={styles.Project_Details}>
      <div className={styles.project_details_first_section}>
        <div className={styles.project_details_first_section_container}>
          <h1 className="heading text-animation">
            <span>{data.heading}</span>
          </h1>
          <h4 className="text-animation">
            <span>{data.subHeading}</span>
          </h4>
          <div className={`${styles.project_category} text-animation`}>
            <span>{data.category}</span>
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
            <span className={styles.visit_site_btn} /* onClick={scrollDown} */>
              Visit Site
            </span>
          </a>
          <div className="cover-img-div">
          {data.banner? 
          <Image src={data.banner.src} width={data.banner.width} height={data.banner.height}  alt="baad me" />
          : ""}
          </div>
        </div>
      </div>
      <div className={styles.portfolio_images}>
 
        <div className={`${styles.portfolio_image2}`}  >

        {data?.images?.map((img)=> {
          return (

            <>
              {img.width < 600 ? 
                <div className={`${styles.portfolio_half} displaySmallNone`}>
                  <Image  key={data.images+1} src={img.src} width={img.width} height={img.height}  alt="baad me" />
                </div>
                : 
                  <Image  key={data.images+1} src={img.src} width={img.width} height={img.height}  alt="baad me" />
                }
            </>

                )
            })}
 
            </div>

     

        {/* <div className={styles.portfolio_image}>
          <Image alt="baad me" src={khansortium_portfolio_img11} />
        </div>

        <div className={styles.portfolio_image}>
          <div className={`${styles.portfolio_half} displaySmallNone`}>
            <Image alt="baad me" src={mob_project1} />
          </div>
          <div className={styles.portfolio_half}>
            <Image alt="baad me" src={mob_project1} />
          </div>
        </div> */}





      </div>
    </div>
  );
};

export default ProjectDetailsPage;
