import Link from "next/link";
import React from "react";
import styles from "./services.module.css";

function OurServices({ mainHeading, forHome }) {
  return (
    <section className={`${styles.bg_gray} ${styles.services_section}`}>
      <div className={`${styles.serv_container}`}>
        {mainHeading ? (
          <h2 className={`${styles.main_heading}`}>{mainHeading} </h2>
        ) : (
          ""
        )}

        <div className={`${styles.services_main_div}`}>
          <Link href="/services/front-end">
            <a className={`${styles.d_contents}`}>
              <div className={`${styles.service__card}`}>
                <span className={`${styles.numbering}`}>01</span>
                <h2 className={`${styles.service_name}`}>Front End Development</h2>
                <p className={`${styles.service_text}`}>
                Being a front-end web development company with over 15 years, we have experience in building complex, innovative, responsive, and user-centric solutions. Our interfaces are designed with close attention to detail and look great on both desktop screens and mobile devices.
                </p>
              </div>
            </a>
          </Link>
          <Link href="/services/back-end">
            <a className={`${styles.d_contents}`}>
              <div className={`${styles.service__card}`}>
                <span className={`${styles.numbering}`}>02</span>
                <h2 className={`${styles.service_name}`}>Back End  <br/> Development</h2>
                <p className={`${styles.service_text}`}>
                We provide custom back-end development for various web, cloud-based and mobile apps across multiple domains. Whatever your requirements, our back-end development team will provide you with a customized solution that will help you achieve your business goals.
                </p>
              </div>
            </a>
          </Link>
           
          
              <Link href="/services/ecommerce">
                <a className={`${styles.d_contents}`}>
                  <div className={`${styles.service__card}`}>
                    <span className={`${styles.numbering}`}>03</span>
                    <h2 className={`${styles.service_name}`}>
                      eCommerce Website Development
                    </h2>
                    <p className={`${styles.service_text}`}>
                    E-commerce is an innovative way of doing business. It has revolutionized the process of online shopping by changing the way consumers buy or sell goods and services. Metalegacy helps you transform your e-commerce dream into reality with its out of the box ideas. Being the top service provider of eCommerce website development...
                    </p>
                  </div>
                </a>
              </Link>
              {!forHome ? (
            <>
              <Link href="/services/wordpress">
                <a className={`${styles.d_contents}`}>
                  <div className={`${styles.service__card}`}>
                    <span className={`${styles.numbering}`}>04</span>
                    <h2 className={`${styles.service_name}`}>
                      WordPress Development
                    </h2>
                    <p className={`${styles.service_text}`}>
                    With our focus on WordPress development, you can rest assured that our team is well-versed in the best practices and newest features. In fact, our interest in WordPress goes far beyond our jobs. More than half of the Metalegacy team has donated their own time to contribute to the core development of WordPress and have built a number of...
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/services/graphics-designing">
                <a className={`${styles.d_contents}`}>
                  <div className={`${styles.service__card}`}>
                    <span className={`${styles.numbering}`}>05</span>
                    <h2 className={`${styles.service_name}`}>Graphics Design Service</h2>
                    <p className={`${styles.service_text}`}>
                    It’s hard to get noticed in a world of visual noise. While businesses increasingly use videos and images to attract customers, it’s stunning visuals that will make you stand out from the rest. We provide professional graphic design services to help you create the perfect blend of creativity. Our creatives team has years of experience designing...
                    </p>
                  </div>
                </a>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>

      {forHome ? (
        <div className={`${styles.serv_container}`}>
          <Link href="/services">
            <a
              className={`${styles.submit_btn}`}
              type="button"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              See All Services
            </a>
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default OurServices;
