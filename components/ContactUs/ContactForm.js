import React from "react";
import Image from "next/image";
import styles from "./contact-us.module.css";
import building from "../../assets/imgs/icons/building.svg";
import email from "../../assets/imgs/icons/email.svg";

function ContactForm() {
  return (
    <section id="contact_form_section" className={`${styles.contact_form_section}`}>
      <div className={`${styles.c_container}`}>
        <div className={`${styles.form_div}`}>
          <div className={`${styles.form_div_left}`}>
            <div>
              <h3 className={`${styles.main_heading}`}>
                Contact our support guys or make appointment with our{" "}
                <span className={`${styles.yellow}`}>consultants</span>
              </h3>
            </div>

            <p>
              Please contact us using the information below or send your details
              over by filling the given contact form, please mention the best
              time to reach to you.
            </p>

            <div className={`${styles.contact_div}`}>
              <p className={`${styles.text}`}>
                <span className={`${styles.img_span}`}>
                  <Image src={building} />
                </span>
                Suite# 202, Second Floor Mustafa Centre, Gizri, Karachi, 75500,
                Pakistan
              </p>
              <p className={`${styles.text}`}>
                <span className={`${styles.img_span2}`}>
                  <Image src={email} />
                </span>
                info@metalegacy.pk
              </p>
            </div>
          </div>
          <div className={`${styles.form_div_right}`}>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className={`${styles.form_control}`}
                  id="exampleFormControlInput1"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  className={`${styles.form_control}`}
                  id="exampleFormControlInput1"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <select
                  className={`${styles.form_control}`}
                  id="exampleFormControlSelect1"
                >
                  <option value="" disabled="" hidden="">
                    Select Topic{" "}
                  </option>
                  <option>Software Development</option>
                  <option>Social Media Management</option>
                  <option>Bunsiness Management(B.P.O)</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className={`${styles.form_control}`}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Write..."
                ></textarea>
                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  className="aos-init aos-animate"
                >
                  <input
                    className={`${styles.submit_btn}`}
                    type="button"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    value="Submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${styles.map_div}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0, borderRadius: "10px" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
