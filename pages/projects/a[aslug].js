import gsap from "gsap"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import Image from "next/image"
import khansortium_banner from '../../assets/imgs/portfolios/khansortium/khansortium_banner.jpg'
import khansortium_mob_banner from '../../assets/imgs/projects/prj1.webp'
import khansortium_portfolio_img1 from '../../assets/imgs/projects/prj-h-5.jpg'
import khansortium_portfolio_img11 from '../../assets/imgs/projects/prj-h-6.jpg'
import khansortium_portfolio_img2 from '../../assets/imgs/projects/prj-h-7.jpg'
import khansortium_portfolio_img3 from '../../assets/imgs/projects/prj-h-8.jpg'
import khansortium_portfolio_img4 from '../../assets/imgs/projects/prj-h-9.jpg'
import khansortium_portfolio_img5 from '../../assets/imgs/projects/prj-h-1.jpg'

import mob_project1 from '../../assets/imgs/projects/prj-v-1.png'
import mob_project2 from '../../assets/imgs/projects/prj-v-2.png'
import mob_project3 from '../../assets/imgs/projects/prj-v-3.png'
import mob_project4 from '../../assets/imgs/projects/prj-v-4.png'


import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import portfolio from '../../assets/imgs/projects/prj1.webp'
import portrait from '../../assets/imgs/projects/prj1.webp'
import styles from '../../components/Projects/styles.module.css'
import { useRouter } from "next/router";







import barringtonBanner from '../../assets/imgs/projects/barrington/banner.jpg';
import gammaVrBanner from '../../assets/imgs/projects/gamma-vr/banner.jpg';
import khansortiumBanner from '../../assets/imgs/projects/khansortium/banner.jpg';
import wholeCellBanner from '../../assets/imgs/projects/wholecell/banner.jpg';

import barringtonImg1 from '../../assets/imgs/projects/barrington/LOGO.jpg';
import barringtonImg2 from '../../assets/imgs/projects/barrington/SOCIAL MEDIA.jpg';
import barringtonImg3 from '../../assets/imgs/projects/barrington/WEBSITE.jpg';

import gammaVronImg1 from '../../assets/imgs/projects/gamma-vr/Logo.jpg';
import gammaVronImg2 from '../../assets/imgs/projects/gamma-vr/SOCIAL MEDIA.jpg';
import gammaVronImg3 from '../../assets/imgs/projects/gamma-vr/01.jpg';
import ProjectDetailsPage from "../../components/Projects/ProjectDetailsPage"









gsap.registerPlugin(ScrollTrigger);

const ProjectDetail =({slug})=>{
    const [isMobile,setIsMobile]=useState(false)
    const [bannerImg,setBannerImg] = useState(khansortium_banner)
    console.log(slug)

    useEffect(()=>{

        const handleResize =()=>{
            setIsMobile(window.innerWidth < 768)
        }
        setBannerImg(()=>isMobile? khansortium_banner: khansortium_banner)
            window.addEventListener('resize',handleResize)
        return ()=> window.removeEventListener('resize',handleResize)
    },[isMobile])
    useEffect(()=>{
        const moveBanner =()=>{
            let banner = document.querySelector("."+styles.project_banner)
            let sdb = document.querySelector("."+styles.scroll_down_btn)
            if(window.scrollY>100){
                banner?.classList.add(styles.active)
                sdb?.classList.remove(styles.active)
                
            }else{
                banner?.classList.remove(styles.active)
                sdb?.classList.add(styles.active)
                
            }
        }
      window.addEventListener('scroll',moveBanner)
          gsap.utils.toArray("."+styles.portfolio_image).forEach(el=>{
            
            ScrollTrigger.create({
              trigger: el,
                start:"top center",              
                onEnter:()=> el.classList.add(styles.active)
             
            });
          })
   
        let tl = gsap.timeline({defaults:{ease:"power1.out",duration:.2}})
       tl
       .to('.firstLayer',{y:"-100%",duration:1,ease:"linear"})
       
       .to(['nav ul li'],{opacity:1,stagger:.1})
       .to(`.${styles.project_details_first_section_container}  h1 > span`,{y:0,duration:.5})
       .to(`.${styles.project_details_first_section_container} h4 > span`,{y:0,duration:.5})
       .to(`.${styles.project_category }  > span`,{y:0})
       .to(`.${styles.project_category}`,{overflow:'visible'})
       .to(`.${styles.project_banner} > span`,{y:'0',opacity:1,duration:.7})
       .to(`.${styles.project_banner} .${styles.scroll_down_btn}`,{scale:'1'})

    },[])
 /*    const scrollDown =()=>{
        window.scrollTo(0,window.innerHeight/1.2)
    } */

    
    const router = useRouter();
  let currentSlug = router.query;
  console.log("current",currentSlug);

  const [allProjects, set_allProjects] = useState([
    {
      slug: "barrington",
      heading: "Barrington",
      subHeading: "Website Designing",
      category: "Cricket",
      banner: barringtonBanner,
      
      
      images: [
        barringtonImg1,
        barringtonImg2,
        barringtonImg3
      ],
    },
    {
      slug: "gamma-vr",
      heading: "Gamma VR",
      subHeading: "Website Designing",
      category: "Gamming",
      banner: gammaVrBanner,
      
      
      images: [
        gammaVronImg1,
        gammaVronImg2,
        gammaVronImg3
      ],
    },
    {
      slug: "khansortium",
      heading: "Khansortium",
      subHeading: "Website Designing",
      category: "Group of Company",
      banner: khansortiumBanner,
      
      
      images: [
        gammaVronImg1,
      ],
    },
    {
      slug: "whole-cell",
      heading: "Whole Cell Accessories",
      subHeading: "Website Designing",
      category: "Mobile Phones",
      banner: wholeCellBanner,
      
      
      images: [
        gammaVronImg1,
      ],
    }, 
  ]);

  const [bannerContent, setBannerContent] = useState({});

  useEffect(() => {
    setBannerContent(() => {
      let myObj = {};
      allProjects.map((service) => {
        console.log("map");
        console.log("currentSlug.servicesid",currentSlug.slug);
        console.log("service.slug",service.slug);
        if (service.slug === currentSlug.slug) myObj = { ...service };
      });
      return {
        ...myObj,
      };
    });
  }, []);

  console.log("bannerContent",bannerContent)



    return <Layout>
        <ProjectDetailsPage data={bannerContent} />
      <div className="firstLayer"></div>
    </Layout>
}
export default ProjectDetail

export async function getServerSideProps(ctx){
    const  {slug} =  await ctx.query

    return{
        props:{
            slug
        }
    }
}