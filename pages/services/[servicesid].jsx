// import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Layout from "../../components/layout/Layout";
import ButtonBottomNavigators from "../../components/navigators/ButtonBottomNavigators";

import { useRouter } from "next/router";


// export const getStaticPaths = async () =>{
//     const res = await fetch("http://localhost:8080/services")
//     const data = await res.json()

//     const paths = data.map(item => {
//         return {
//           params: { servicesId: item.id.toString() }
//         }
//       })
//     return {
//         paths,
//         fallback:false
//     }
// }

// export const getStaticProps = async (context)=>{
//     const id = context.params.servicesId
//     const res = await fetch("http://localhost:8080/services/"+id)
//     const data = await res.json()
//     return {
//         props:{
//             service:data
//         }
//     }
// }

// const bottomNavigators =[
//     {
//         text:'React Js Projects',
//         link:'/react-js-projects'
//     },
//     {
//         text:'Why React Js',
//         link:'/why-react-js'
//     },
//     {
//         text:'More Services',
//         link:'/services'
//     },
// ]
// const bannerContent= {
//     heading: ["React Js","Development" ],
//     subHeading:["Expect", "Nothing", "Less than" ,"Perfect."],
//      btn1:{
//          text:'Our Projects'
//      },
//      btn2:{
//          text:'Hire Experts'
//      }

// }
export default function Home({}) {

    const [services, set_services] = useState([
        {
          text: "Alfala" + " Projects",
          link: "/projects/" + "alfala",
          heading: ["heading0", "heading1"],
          subHeading: ["subHeading1", "subHeading2"],
        },
        {
          text: "Fatah" + " Projects",
          link: "/projects/" + "fatah",
          heading: ["heading0", "heading1"],
          subHeading: ["subHeading1", "subHeading2"],
        },
      ]);

    const router = useRouter();
    let currentSlug = router.query;
    // const { slug } = router.query;
    // console.log("slug", router.query);


  const [service, set_service] = useState([
    {
      text: "Alfala" + " Projects",
      link: "/projects/" + "alfala",
      heading: ["heading0", "heading1"],
      subHeading: ["subHeading1", "subHeading2"],
    },
    {
      text: "Fatah" + " Projects",
      link: "/projects/" + "fatah",
      heading: ["heading0", "heading1"],
      subHeading: ["subHeading1", "subHeading2"],
    },
  ]);



  const [allServices, set_allServices] = useState([
    {
        slug:"front-end",
        heading: ["front end", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Front End" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
    {
        slug:"back-end",
        heading: ["back end", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Back End" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
    {
        slug:"wordpress",
        heading: ["wordpress", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Wordpress" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
    {
        slug:"full-stack",
        heading: ["Full Stack", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Full Stack" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
    {
        slug:"ecommerce",
        heading: ["Ecommerce Website", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Ecommerce Website" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
    {
        slug:"graphics-designing",
        heading: ["Graphics Designing", "development"],
        subHeading: ["if you can", " think it", " web it"],
        btn1: {text: "Our Projects",},
        btn2: {text: "Hire Experts",},
        bottomNavigatorData: [{text: "Graphics Designing" + " Projects",link: "/projects/" + "01",},{text: "Why Us",link: "/about-us",},{text: "More Services",link: "/services",},]
    },
  ]);



//   const [bannerContent, setBannerContent] = useState({
//     heading: ["react", "development"],
//     subHeading: ["if you can", " think it", " web it"],
//     btn1: {text: "Our Projects",},
//     btn2: {text: "Hire Experts",},
//   });
    const [bannerContent, setBannerContent] = useState({});
  const [bottomNavigators, setBottomNavigators] = useState([
    {
      text: "Front End" + " Projects",
      link: "/projects/" + "01",
    },
    {
      text: "Why Us",
      link: "/about-us",
    },
    {
      text: "More Services",
      link: "/services",
    },
  ]);
  // console.log(bannerContent)

  useEffect(() => {
    
    // let item;
    // if(id){

    //      item = services.filter(service => service.id == id)
    //      console.log('id')
    // }

    // setBottomNavigators(()=>{

    //     return[
    //         {
    //             text:service.name + " Projects",
    //             link:'/projects/'+service.id
    //         },
    //         {
    //             text: "Why " + service.name,
    //             link:'/why/'+service.id
    //         },
    //         {
    //             text:'More Services',
    //             link:'/services'
    //         },
    //     ]
    // })
    //  setBannerContent(prevState=>{

    //     return {
    //             ...prevState,
    //             heading:[...service.heading],
    //             subHeading:[...service.subHeading]
    //         }
    //     })


   
    // console.log("router.query",router.query)
    // console.log("allServices",allServices)
    // for (let i = 0; i < allServices.length; i++) { 
        
    //     console.log("allServices[i].slug", allServices[i].slug);
    //     console.log("currentSlug", currentSlug.servicesid);
        
    //     // let data = undefined;
    //     if(allServices[i].slug == currentSlug.servicesid) {
    //         // data = allServices[i]
    //         console.log("yes");
    //         console.log("allServices[i]",allServices[i])
    //         setBannerContent({service: allServices[i]});
    //         console.log("bannerContent", bannerContent);
    //     } else {
    //         console.log("no");
    //     }

    //         console.log("bannerContent", bannerContent);

    // }
    setBannerContent(()=>{
        let myObj={}
        allServices.map(service=> {
            if(service.slug === currentSlug.servicesid)
            myObj= {...service}
        }  )

        return{
            ...myObj
        }

    })
    
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