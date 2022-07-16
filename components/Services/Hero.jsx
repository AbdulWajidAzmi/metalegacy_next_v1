import gsap from "gsap";
import { useEffect } from "react";
import styles from "./services.module.css";

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
          <span className="font-inherit text-animation">
            Your Native Technology Partner
          </span>
        </h1>
        <p className="mt1 mb1 no-circle text-animation">
          <span className="text-animation">
            In this competitive era, the demands of potential customers have
            increased dramatically. No matter which business it is, there is a
            dire need for a remarkable online presence. If done strategically,
            it can bring a real boost in sales and help in gaining a competitive
            edge.
          </span>
        </p>
        <button className={`${styles.btn} btn mt1 no-circle`}>
          View Services
        </button>
      </div>
    </section>
  );
};

export default Hero;
