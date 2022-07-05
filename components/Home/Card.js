import Image from "next/image";
import React from "react";
import styles from "../AboutUs/about-us.module.css";
import card_styles from "./card.module.css";
import laptop from "../../assets/imgs/about-us/laptop.png";

function Card({ data }) {
  return (
    <div className={`${card_styles.card}`}>
        <div className={`${card_styles.img_div}`}>
          <span className={`img_span`}>
            <Image src={data.img} alt={"image"} width={"200px"} height={200} />
          </span>
        </div>
      <h3 className={`${card_styles.title}`}>{data.title}</h3>
      <p className={`${card_styles.text}`}>{data.description}</p>
    </div>
  );
}

export default Card;
