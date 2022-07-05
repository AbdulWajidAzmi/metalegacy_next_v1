import gsap from "gsap";
import { useEffect } from "react";
import styles from "../Services/services.module.css";
import styles2 from "./about-us.module.css";

const Hero = () => {
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.2 } });
    tl.to(".firstLayer", { y: "-100%", duration: 1, ease: "linear" })
      .to(`.${styles.servicemainhead} h1 > span`, { y: 0, duration: 0.5 })
      .to(`.${styles.servicemainhead} p > span`, { y: 0, duration: 0.5 })
      .to([`.${styles.servicemainhead} .container .btn`, "nav ul li"], {
        opacity: 1,
        stagger: 0.1,
      });
  }, []);
  return (
    <section className={`${styles.servicemainhead} ${styles2.aboutmainhead}`}>
      <div className="container">
        <h1 className={`${styles.heading} heading no-circle text-animation`}>
          <span className="font-inherit text-animation">About Us</span>
        </h1>
        <p className="mt1 mb1 no-circle text-animation">
          <span className="text-animation">
          An organization where individuals have the knowledge, skill, desire, and opportunity to personally succeed in a way that leads to collective organizational success. Mentioned below, some of our core skills and capabilities.
          </span>
        </p>
        <button className={`${styles.btn} btn mt1 no-circle`}>
          Join Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
