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
          <div className={`${styles.service__card}`}>
            <span className={`${styles.numbering}`}>01</span>
            <h2 className={`${styles.service_name}`}>Front End Developer</h2>
            <p className={`${styles.service_text}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              et, doloribus culpa similique quam excepturi nobis eveniet atque
              ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus
              rerum nam explicabo aspernatur facere magnam officiis consequatur?
              Voluptatem voluptas ut molestiae quae iusto.
            </p>
          </div>
          <div className={`${styles.service__card}`}>
            <span className={`${styles.numbering}`}>02</span>
            <h2 className={`${styles.service_name}`}>Back End Development</h2>
            <p className={`${styles.service_text}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              et, doloribus culpa similique quam excepturi nobis eveniet atque
              ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus
              rerum nam explicabo aspernatur facere magnam officiis consequatur?
              Voluptatem voluptas ut molestiae quae iusto.
            </p>
          </div>
          <div className={`${styles.service__card}`}>
            <span className={`${styles.numbering}`}>03</span>
            <h2 className={`${styles.service_name}`}>Full Stack Development</h2>
            <p className={`${styles.service_text}`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              et, doloribus culpa similique quam excepturi nobis eveniet atque
              ut tenetur ipsam, eligendi libero velit, ducimus necessitatibus
              rerum nam explicabo aspernatur facere magnam officiis consequatur?
              Voluptatem voluptas ut molestiae quae iusto.
            </p>
          </div>
          {!forHome ? (
            <>
              <div className={`${styles.service__card}`}>
                <span className={`${styles.numbering}`}>04</span>
                <h2 className={`${styles.service_name}`}>
                  eCommerce Website Development
                </h2>
                <p className={`${styles.service_text}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus et, doloribus culpa similique quam excepturi nobis
                  eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus
                  necessitatibus rerum nam explicabo aspernatur facere magnam
                  officiis consequatur? Voluptatem voluptas ut molestiae quae
                  iusto.
                </p>
              </div>
              <div className={`${styles.service__card}`}>
                <span className={`${styles.numbering}`}>05</span>
                <h2 className={`${styles.service_name}`}>
                  WordPress Development
                </h2>
                <p className={`${styles.service_text}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus et, doloribus culpa similique quam excepturi nobis
                  eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus
                  necessitatibus rerum nam explicabo aspernatur facere magnam
                  officiis consequatur? Voluptatem voluptas ut molestiae quae
                  iusto.
                </p>
              </div>
              <div className={`${styles.service__card}`}>
                <span className={`${styles.numbering}`}>06</span>
                <h2 className={`${styles.service_name}`}>Graphics Designing</h2>
                <p className={`${styles.service_text}`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus et, doloribus culpa similique quam excepturi nobis
                  eveniet atque ut tenetur ipsam, eligendi libero velit, ducimus
                  necessitatibus rerum nam explicabo aspernatur facere magnam
                  officiis consequatur? Voluptatem voluptas ut molestiae quae
                  iusto.
                </p>
              </div>
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
