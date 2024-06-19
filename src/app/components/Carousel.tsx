import React from "react";
import Hero_img from "../Images/carousel_bg.svg";
import Hero_img1 from "../Images/carousel_bg1.svg";
import Hero_img2 from "../Images/carousel_bg2.svg";
import Hero_img3 from "../Images/carousel_bg3.svg";
import Hero_img4 from "../Images/carousel_bg4.svg";
import Left from "../Images/left_arrow.svg";
import Right from "../Images/right_arrow.svg";
import Image from "next/image";

export default function Carousel() {
  return (
    <>
      <section className="carousel relative py-5 flex justify-center items-center flex-col">
        <Image
          src={Left}
          width={25}
          height={25}
          className="absolute lg:top-64 lg:left-6 hidden"
          alt="arrow1"
        />
        <Image
          src={Right}
          width={25}
          height={25}
          className="absolute lg:top-64 lg:right-6 hidden"
          alt="arrow2"
        />
        <Image
          src={Hero_img}
          width={1440}
          height={500}
          className="img"
          alt="heroimg"
        />
        <div className="carousel_group relative grid gap-12 my-4 grid-cols-4">
          <Image src={Hero_img1} width={275} height={168} alt="hero1" />
          <Image src={Hero_img2} width={275} height={168} alt="hero2" />
          <Image src={Hero_img3} width={275} height={168} alt="hero3" />
          <Image src={Hero_img4} width={275} height={168} alt="hero4" />
        </div>
      </section>
    </>
  );
}
