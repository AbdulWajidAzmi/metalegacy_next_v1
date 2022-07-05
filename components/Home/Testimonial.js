import Image from "next/image";
import React from "react";
import styles from "../AboutUs/about-us.module.css";
import testimonial_styles from ".//testimonial.module.css";
import profile from "../../assets/imgs/profile.png";
import profile1 from "../../assets/imgs/profile/pr1.png";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialData = [
  {
    img: profile1,
    title: "mr. kamran",
    description:
      "And then sit down to figure out the best to develop. So, we say we are going to done it.",
  },
  {
    img: profile1,
    title: "mr. arsalan",
    description:
      "We adjust to changing times and still hold to. So, we do we say we going to do..",
  },
  {
    img: profile1,
    title: "mr. arshad",
    description:
      "Because the most important property of a program is whether it accomplishes the  of its user..",
  },
  {
    img: profile1,
    title: "mr. ubaid",
    description:
      "And then sit down to figure path to develop. So, we do what we  we are going to done it.",
  },
  {
    img: profile1,
    title: "mr. hassan",
    description:
      "We adjust to changing times and still hold to principles. So, we do we say we going to do..",
  },
  {
    img: profile1,
    title: "mr. zubair",
    description:
      "Because the most important property of a program is whether it intention of its user..",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // className={`${testimonial_styles.next}`}
      style={{
        ...style,
        display: "block",
        width: "35px",
        height: "50px",
        fontSize: "20px",
        color: "#005adc",
        cursor: "pointer",
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // className={`${testimonclassNameial_styles.prev}`}
      style={{
        ...style,
        display: "block",
        width: "35px",
        height: "50px",
        fontSize: "20px",
        color: "#005adc",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function Testimonial() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={`${testimonial_styles.testimonial_section}`}>
      <div className={`${styles.c_container}`}>
        <h3 className={`${testimonial_styles.sec_heading}`}>
          <span className={`${styles.yellow}`}>Testimonial</span>
        </h3>
        {/* <h3 className={`${styles.main_heading}`}>
          <span className={`${styles.yellow}`}>Testimonial</span>
        </h3> */}
        <div className={`${testimonial_styles.slider_div}`}>
          <Slider {...settings}>
            {testimonialData.map((value, index) => {
              return <Card key={value.title} data={value} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
