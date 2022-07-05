import Image from "next/image";
import React from "react";
import styles from "./about-us.module.css";
import laptop from "../../assets/imgs/about-us/laptop.png";
import rocket from "../../assets/imgs/about-us/rocket.png";
import rate from "../../assets/imgs/icons/rate.svg";
import ineigrity from "../../assets/imgs/icons/ineigrity.svg";
import person from "../../assets/imgs/icons/person.svg";
import Card from "./Card";

const chooseUsData = [
  {
    img: rate,
    title: "YOU TALK WE LISTEN",
    description: "And then sit down to figure out the best path to develo",
  },
  {
    img: ineigrity,
    title: "WE VALUE INTEGRITY",
    description: "We adjust to changing times and still hold to unchanging principles. So, we do what we say we are going to do..",
  },
  {
    img: person,
    title: "WE CODE FOR HUMANS",
    description: "Because the most important property of a program is whether it accomplishes the intention of its user..",
  },
];
function WhyChooseUs() {
  return (
    <section className={`${styles.whychoose_section}`}>
      <div className={`${styles.c_container}`}>
        <h3 className={`${styles.main_heading_b}`}>
          <span className={`${styles.yellow}`}>WHY CHOOSE US?</span>
        </h3>
        <h3 className={`${styles.main_heading}`}>
        Many companies, But Why choose Meta legacy?
        </h3>
        <div className={`${styles.flex_div}`}>
          {chooseUsData.map((value,index)=>{
            return (
              <Card key={value.title} data={value} />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
