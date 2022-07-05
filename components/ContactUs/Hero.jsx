import gsap from "gsap";
import { useEffect } from "react";
import styles from "../Services/services.module.css";

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
    <section className={styles.servicemainhead}>
      <div className="container">
        <h1 className={`${styles.heading} heading no-circle text-animation`}>
          <span className="font-inherit text-animation">Contact Us</span>
        </h1>
        <p className="mt1 mb1 no-circle text-animation">
          <span className="text-animation">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            sapiente accusantium quas animi modi laboriosam facere cum porro
            pariatur eos aut, odio dicta aliquid voluptate! Eos saepe, rerum
            itaque cupiditate officiis, est nisi quasi voluptas labore rem iure
            dignissimos illum.
          </span>
        </p>
        <button className={`${styles.btn} btn mt1 no-circle`}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Hero;
