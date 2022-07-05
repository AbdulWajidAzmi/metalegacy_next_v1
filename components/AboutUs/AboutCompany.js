import Image from "next/image";
import React from "react";
import styles from "./about-us.module.css";
import laptop from "../../assets/imgs/about-us/laptop.png";
import rocket from "../../assets/imgs/about-us/rocket.png";

function AboutCompany() {
  return (
    <section className={`${styles.contact_form_section}`}>
      <div className={`${styles.c_container}`}>
        <div className={`${styles.flex_div}`}>
          <div className={`${styles.img_div}`}>
            <div className={`${styles.laptop}`}>
              <Image src={laptop} alt={"image"} />
            </div>
            <div className={`${styles.rocket}`}>
              <Image src={rocket} alt={"image"} />
            </div>
          </div>

          <div className={`${styles.right_div}`}>
            <h3 className={`${styles.main_heading_b}`}>
              <span className={`${styles.yellow}`}>WE AT META LEGACY</span>
            </h3>
            <h3 className={`${styles.main_heading}`}>
              are happy to assist you any time, any moment.
            </h3>

            <p className={`${styles.text}`}>
              An organization where individuals have the knowledge, skill,
              desire, and opportunity to personally succeed in a way that leads
              to collective organizational success. Mentioned below, some of our
              core skills and capabilities:
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
